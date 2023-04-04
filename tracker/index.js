(window => {
  const {
    screen: { width, height },
    navigator: { language },
    location,
    localStorage,
    document,
    history,
  } = window;
  const { hostname, pathname, search } = location;
  const { currentScript } = document;

  if (!currentScript) return;

  const delayDuration = 300;
  const _data = 'data-';
  const _false = 'false';
  const attr = currentScript.getAttribute.bind(currentScript);
  const website = attr(_data + 'website-id');
  const hostUrl = attr(_data + 'host-url');
  const autoTrack = attr(_data + 'auto-track') !== _false;
  const dnt = attr(_data + 'do-not-track');
  const domain = attr(_data + 'domains') || '';
  const domains = domain.split(',').map(n => n.trim());
  const root = hostUrl
    ? hostUrl.replace(/\/$/, '')
    : currentScript.src.split('/').slice(0, -1).join('/');
  const endpoint = `${root}/api/send`;
  const screen = `${width}x${height}`;
  const eventRegex = /data-umami-event-([\w-_]+)/;

  /* Helper functions */

  const hook = (_this, method, callback) => {
    const orig = _this[method];

    return (...args) => {
      callback.apply(null, args);

      return orig.apply(_this, args);
    };
  };

  const getPath = url => {
    if (url.substring(0, 4) === 'http') {
      return '/' + url.split('/').splice(3).join('/');
    }
    return url;
  };

  const getPayload = () => ({
    website,
    hostname,
    screen,
    language,
    title,
    url: currentUrl,
    referrer: currentRef,
  });

  /* Tracking functions */

  const doNotTrack = () => {
    const { doNotTrack, navigator, external } = window;

    const msTrackProtection = 'msTrackingProtectionEnabled';
    const msTracking = () => {
      return external && msTrackProtection in external && external[msTrackProtection]();
    };

    const dnt = doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || msTracking();

    return dnt == '1' || dnt === 'yes';
  };

  const trackingDisabled = () =>
    (localStorage && localStorage.getItem('umami.disabled')) ||
    (dnt && doNotTrack()) ||
    (domain && !domains.includes(hostname));

  const handlePush = (state, title, url) => {
    if (!url) return;

    currentRef = currentUrl;
    currentUrl = getPath(url.toString());

    if (currentUrl !== currentRef) {
      setTimeout(track, delayDuration);
    }
  };

  const handleClick = () => {
    const callback = e => {
      const t = e.target;
      const attr = t.getAttribute.bind(t);
      const eventName = attr(_data + 'umami-event');

      if (eventName) {
        const eventData = {};

        t.getAttributeNames().forEach(name => {
          const match = name.match(eventRegex);

          if (match) {
            eventData[match[1]] = attr(name);
          }
        });

        if (t.tagName === 'A') {
          const href = attr('href');
          const target = attr('target');

          if (
            href &&
            target !== '_blank' &&
            !(e.ctrlKey || e.shiftKey || e.metaKey || (e.button && e.button === 1))
          ) {
            e.preventDefault();
            return track(eventName, { data: eventData }).then(() => {
              location.href = href;
            });
          }
        }

        track(eventName, { data: eventData });
      }
    };

    document.addEventListener('click', callback, true);
  };

  const observeTitle = () => {
    const callback = ([entry]) => {
      title = entry.target.text;
    };

    const observer = new MutationObserver(callback);

    observer.observe(document.querySelector('head > title'), {
      subtree: true,
      characterData: true,
      childList: true,
    });
  };

  const send = payload => {
    if (trackingDisabled()) return;

    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ type: 'event', payload }),
      headers: { 'Content-Type': 'application/json', ['x-umami-cache']: cache },
    })
      .then(res => res.text())
      .then(text => (cache = text));
  };

  const track = (name = {}, data = {}) => {
    if (typeof name === 'string') {
      return send({ ...getPayload(), ...data, name });
    } else if (typeof name === 'object') {
      return send({ ...getPayload(), ...name });
    }
    return Promise.reject();
  };

  /* Start */

  if (!window.umami) {
    window.umami = {
      track,
    };
  }

  let currentUrl = `${pathname}${search}`;
  let currentRef = document.referrer;
  let title = document.title;
  let cache;
  let initialized;

  if (autoTrack && !trackingDisabled()) {
    history.pushState = hook(history, 'pushState', handlePush);
    history.replaceState = hook(history, 'replaceState', handlePush);
    handleClick();
    observeTitle();

    const init = () => {
      if (document.readyState === 'complete' && !initialized) {
        track();
        initialized = true;
      }
    };

    document.addEventListener('readystatechange', init, true);

    init();
  }
})(window);
