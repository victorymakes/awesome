import { NextResponse } from 'next/server';
import { awsomeService } from '@/service/awsome-service';

export async function GET() {
  const tags = await awsomeService.getTags();
  return NextResponse.json(tags);
}
