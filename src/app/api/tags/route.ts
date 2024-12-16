// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import { NextRequest } from 'next/server';
import { awsomeService } from '@/service/awsome-service';
import { NextApiResponse } from 'next';

export const runtime = 'edge';

export async function GET(req: NextRequest, res: NextApiResponse<string[]>) {
  const items = await awsomeService.getAwsomeItems();
  const set = new Set();
  for (let item of items) {
    item.tags.forEach((tag) => set.add(tag));
  }
  const tags = Array.from(set) as string[];
  return res.status(200).json(tags);
}
