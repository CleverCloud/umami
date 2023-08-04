import { canViewWebsite } from 'lib/auth';
import { useCors, useAuth } from 'lib/middleware';
import { NextApiRequestQueryBody } from 'lib/types';
import { NextApiResponse } from 'next';
import { ok, methodNotAllowed, unauthorized } from 'next-basics';
import { getRetention } from 'queries';

export interface RetentionRequestBody {
  websiteId: string;
  urls: string[];
  window: number;
  dateRange: {
    startDate: string;
    endDate: string;
  };
}

export interface RetentionResponse {
  urls: string[];
  window: number;
  startAt: number;
  endAt: number;
}

export default async (
  req: NextApiRequestQueryBody<any, RetentionRequestBody>,
  res: NextApiResponse<RetentionResponse>,
) => {
  await useCors(req, res);
  await useAuth(req, res);

  if (req.method === 'POST') {
    const {
      websiteId,
      urls,
      window,
      dateRange: { startDate, endDate },
    } = req.body;

    if (!(await canViewWebsite(req.auth, websiteId))) {
      return unauthorized(res);
    }

    const data = await getRetention(websiteId, {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      urls,
      windowMinutes: +window,
    });

    return ok(res, data);
  }

  return methodNotAllowed(res);
};
