import { NextResponse } from 'next/server';

const VOICE_AGENTS_BASE_URL = 'http://35.200.254.189/voice_agents';

type CallingRequestBody = {
  phone_number?: string;
  assistant_id?: string;
  trunk_name?: string;
  api_key?: string;
  callee_info?: {
    name?: string;
  };
};

function formatPhoneNumber(rawPhoneNumber: string): string {
  const trimmed = rawPhoneNumber.trim();

  if (trimmed.startsWith('+')) {
    const digits = trimmed.slice(1).replace(/\D/g, '');
    return `+${digits}`;
  }

  const digits = trimmed.replace(/\D/g, '');

  if (digits.length === 10) {
    return `+91${digits}`;
  }

  return `+${digits}`;
}

function mapTrunkName(trunkName?: string): string | undefined {
  if (!trunkName) {
    return undefined;
  }

  const normalized = trunkName.toLowerCase();

  if (normalized === 'twilio') {
    return 'Twilio';
  }

  if (normalized === 'vobiz') {
    return 'Vobiz-SIP';
  }

  return trunkName;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CallingRequestBody;
    const { phone_number, assistant_id, trunk_name, api_key, callee_info } = body;

    if (!phone_number || !assistant_id || !api_key) {
      return NextResponse.json(
        { error: 'phone_number, assistant_id, and api_key are required' },
        { status: 400 }
      );
    }

    const formattedPhoneNumber = formatPhoneNumber(phone_number);

    if (formattedPhoneNumber === '+') {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }

    const mappedTrunkName = mapTrunkName(trunk_name);

    const upstreamPayload: {
      assistant_id: string;
      metadata: { name?: string };
      telephony?: { trunk_name: string };
    } = {
      assistant_id,
      metadata: {
        name: callee_info?.name,
      },
    };

    if (mappedTrunkName) {
      upstreamPayload.telephony = {
        trunk_name: mappedTrunkName,
      };
    }

    const upstreamResponse = await fetch(
      `${VOICE_AGENTS_BASE_URL}/outbound-call/${formattedPhoneNumber}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': api_key,
        },
        body: JSON.stringify(upstreamPayload),
      }
    );

    const upstreamText = await upstreamResponse.text();

    let upstreamData: unknown;
    try {
      upstreamData = upstreamText ? JSON.parse(upstreamText) : {};
    } catch {
      upstreamData = { raw: upstreamText };
    }

    return NextResponse.json(upstreamData, { status: upstreamResponse.status });
  } catch (error) {
    console.error('Calling route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
