import { parseFilters, rawQuery, getDateQuery } from 'queries';

export function getPageviewStats(
  website_id,
  start_at,
  end_at,
  timezone = 'utc',
  unit = 'day',
  count = '*',
  filters = {},
) {
  const params = [website_id, start_at, end_at];
  const { pageviewQuery, sessionQuery, joinSession } = parseFilters('pageview', filters, params);

  return rawQuery(
    `
    select ${getDateQuery('pageview.created_at', unit, timezone)} t,
      count(${count}) y
    from pageview
      ${joinSession}
    where pageview.website_id=$1
    and pageview.created_at between $2 and $3
    ${pageviewQuery}
    ${sessionQuery}
    group by 1
    order by 1
    `,
    params,
  );
}
