// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import { NextResponse } from 'next/server';
import { awsomeService } from '@/service/awsome-service';

export const runtime = 'edge';

export async function GET() {
  const categories = await awsomeService.getCategories();
  return NextResponse.json(categories);
}
