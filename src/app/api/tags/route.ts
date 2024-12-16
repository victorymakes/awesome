// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import { NextResponse } from 'next/server';
import { awsomeService } from '@/service/awsome-service';

export const runtime = 'edge';

export async function GET() {
  const tags = await awsomeService.getTags();
  return NextResponse.json(tags);
}
