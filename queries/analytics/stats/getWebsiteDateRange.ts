import prisma from 'lib/prisma';
import clickhouse from 'lib/clickhouse';
import { runQuery, CLICKHOUSE, PRISMA } from 'lib/db';
import { loadWebsite } from 'lib/load';
import { DEFAULT_RESET_DATE } from 'lib/constants';
import { maxDate } from 'lib/date';

export async function getWebsiteDateRange(...args: [websiteId: string]) {
  return runQuery({
    [PRISMA]: () => relationalQuery(...args),
    [CLICKHOUSE]: () => clickhouseQuery(...args),
  });
}

async function relationalQuery(websiteId: string) {
  const { rawQuery } = prisma;

  return rawQuery(
    `
    select
      min(created_at) as min,
      max(created_at) as max
    from website_event
    join website 
      on website_event.website_id = website.website_id
    where website.website_id = {{websiteId::uuid}}
    and website_event.created_at >= coalesce(website.reset_at, website.created_at)
    `,
    { websiteId },
  );
}

async function clickhouseQuery(websiteId: string) {
  const { rawQuery } = clickhouse;
  const website = await loadWebsite(websiteId);

  return rawQuery(
    `
    select
      min(created_at) as min,
      max(created_at) as max
    from website_event
    where website_id = {websiteId:UUID}
      and created_at >= {startDate:DateTime}
    `,
    { websiteId, startDate: maxDate(new Date(DEFAULT_RESET_DATE), website.resetAt) },
  );
}
