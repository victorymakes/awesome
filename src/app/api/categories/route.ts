import { NextResponse } from 'next/server';
import { awsomeService } from '@/service/awsome-service';

export async function GET() {
  const categories = await awsomeService.getCategories();
  return NextResponse.json(categories);
}
