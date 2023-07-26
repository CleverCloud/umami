import { canCreateWebsite } from 'lib/auth';
import { uuid } from 'next-basics';
import { useAuth, useCors } from 'lib/middleware';
import { NextApiRequestQueryBody } from 'lib/types';
import { NextApiResponse } from 'next';
import { methodNotAllowed, ok, unauthorized } from 'next-basics';
import { createWebsite, getUserWebsites } from 'queries';

export interface WebsitesRequestBody {
  name: string;
  domain: string;
  shareId: string;
}

export default async (
  req: NextApiRequestQueryBody<any, WebsitesRequestBody>,
  res: NextApiResponse,
) => {
  await useCors(req, res);
  await useAuth(req, res);

  const {
    user: { id: userId },
  } = req.auth;

  if (req.method === 'GET') {
    const websites = await getUserWebsites(userId);

    return ok(res, websites);
  }

  if (req.method === 'POST') {
    const { name, domain, shareId } = req.body;

    if (!(await canCreateWebsite(req.auth))) {
      return unauthorized(res);
    }

    const data: any = {
      id: uuid(),
      name,
      domain,
      shareId,
    };

    data.userId = userId;

    const website = await createWebsite(data);

    return ok(res, website);
  }

  return methodNotAllowed(res);
};
