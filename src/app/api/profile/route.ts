/** @TODO */
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (token === '123') {
    return NextResponse.json({
      name: 'John Doe',
      email: 'john@example.com',
    });
  }

  return new Response('Unauthorized', { status: 401 });
}