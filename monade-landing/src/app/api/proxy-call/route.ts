import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone_number } = body;

    if (!phone_number) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const apiRes = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.NEXT_PUBLIC_X_API_KEY as string,
        'x-functions-key': process.env.NEXT_PUBLIC_X_FUNCTIONS_KEY as string
      },
      body: JSON.stringify({
        phone_number: phone_number.startsWith('+') ? phone_number : `+91${phone_number}`,
        callback_url: process.env.NEXT_PUBLIC_CALLBACK_URL as string
      })
    });

    const text = await apiRes.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return NextResponse.json(data, { status: apiRes.status });
  } catch (error) {
    console.error('Proxy call error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
