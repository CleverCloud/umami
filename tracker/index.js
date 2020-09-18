import 'promise-polyfill/src/polyfill';
import 'unfetch/polyfill';
import { doNotTrack, hook, post } from '../lib/web';
import { removeTrailingSlash } from '../lib/url';

(window => {
  const {
    screen: { width, height },
    navigator: { language },
    location: { hostname, pathname, search },
    document,
    history,
  } = window;

  const script = document.querySelector('script[data-website-id]');

  // eslint-disable-next-line no-undef
  if (!script || (__DNT__ && doNotTrack())) return;

  const website = script.getAttribute('data-website-id');
  const hostUrl = script.getAttribute('data-host-url');
  const skipAuto = script.getAttribute('data-skip-auto');
  const root = hostUrl
    ? removeTrailingSlash(hostUrl)
    : new URL(script.src).href.split('/').slice(0, -1).join('/');
  const screen = `${width}x${height}`;
  const listeners = [];

  let currentUrl = `${pathname}${search}`;
  let currentRef = document.referrer;

  /* Handle events */

  const removeEvents = () => {
    listeners.forEach(([element, type, listener]) => {
      element && element.removeEventListener(type, listener, true);
    });
    listeners.length = 0;
  };

  const loadEvents = () => {
    document.querySelectorAll('[class*=\'umami--\']').forEach(element => {
      element.className.split(' ').forEach(className => {
        if (/^umami--([a-z]+)--([a-z0-9_]+[a-z0-9-_]+)$/.test(className)) {
          const [, type, value] = className.split('--');
          const listener = () => collectEvent(type, value);

          listeners.push([element, type, listener]);
          element.addEventListener(type, listener, true);
        }
      });
    });
  };
  const collect = (type, params, uuid) => {
    const payload = {
      website: uuid,
      hostname,
      screen,
      language,
    };

    if (params) {
      Object.keys(params).forEach(key => {
        payload[key] = params[key];
      });
    }

    return post(`${root}/api/collect`, {
      type,
      payload,
    });
  };
  const pageView = (url = currentUrl, referrer = currentRef, uuid = website) => collect('pageview', {
    url,
    referrer,
  }, uuid);

  /* Collect metrics */
  const pageViewWithAutoEvents = (url, referrer) => pageView(url, referrer).then(() => setTimeout(loadEvents, 300));

  /* Handle history */
  const handlePush = (state, title, url) => {
    removeEvents();
    currentRef = currentUrl;
    const newUrl = url.toString();

    if (newUrl.substring(0, 4) === 'http') {
      const { pathname, search } = new URL(newUrl);
      currentUrl = `${pathname}${search}`;
    } else {
      currentUrl = newUrl;
    }

    pageViewWithAutoEvents(currentUrl, currentRef);
  };

  const collectEvent = (event_type, event_value, url = currentUrl, uuid = website) => collect('event', {
    url,
    event_type,
    event_value,
  }, uuid);

  const registerAutoEvents = () => {
    history.pushState = hook(history, 'pushState', handlePush);
    history.replaceState = hook(history, 'replaceState', handlePush);
    return pageViewWithAutoEvents(currentUrl, currentRef);
  };


  const umamiFunctions = { collect, pageView, collectEvent, registerAutoEvents };
  const scheduledCalls = window.umami.calls;

  window.umami = event_value => collect('event', { event_type: 'custom', event_value });
  Object.keys(umamiFunctions).forEach((key) => {
    window.umami[key] = umamiFunctions[key];
  });

  if (scheduledCalls) {
    scheduledCalls.forEach(([fnName, ...params]) => {
      window.umami[fnName].apply(window.umami, params);
    });
  }

  /* Start */
  if (!skipAuto) {
    registerAutoEvents().catch(e => console.error(e));
  }
})(window);
