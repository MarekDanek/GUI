// app/api/kurzy/route.ts
import { NextResponse } from 'next/server';
import { COURSES } from '../../data/mock_data';

export async function GET() {

  return NextResponse.json(COURSES);
}