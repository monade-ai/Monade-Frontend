import { NextResponse } from 'next/server';

const VOICE_AGENTS_BASE_URL =
  process.env.VOICE_AGENTS_BASE_URL ?? 'http://35.200.254.189/voice_agents';
const MONADE_API_BASE_URL =
  process.env.MONADE_API_BASE_URL ?? 'http://35.200.254.189/db_services';

const USE_CASE_KB_ENV_KEY_MAP: Record<string, string | undefined> = {
  taxi: process.env.CALLING_KB_ID_TAXI,
  realestate: process.env.CALLING_KB_ID_REALESTATE,
  ecommerce: process.env.CALLING_KB_ID_ECOMMERCE,
  restaurant: process.env.CALLING_KB_ID_RESTAURANT,
};

type UseCaseKnowledgeBaseMap = Record<string, string>;

type CallingRequestBody = {
  phone_number?: string;
  assistant_id?: string;
  trunk_name?: string;
  use_case?: string;
  knowledge_base_id?: string;
  callee_info?: {
    name?: string;
    [key: string]: unknown;
  };
};

function trimToNull(value?: string): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  return trimmed;
}

function parseUseCaseKnowledgeBaseMap(input: unknown): UseCaseKnowledgeBaseMap {
  if (!input || typeof input !== 'object') {
    return {};
  }

  const result: UseCaseKnowledgeBaseMap = {};

  for (const [rawUseCase, rawKnowledgeBaseId] of Object.entries(input)) {
    if (typeof rawKnowledgeBaseId !== 'string') {
      continue;
    }

    const normalizedUseCase = rawUseCase.trim().toLowerCase();
    const normalizedKnowledgeBaseId = rawKnowledgeBaseId.trim();

    if (!normalizedUseCase || !normalizedKnowledgeBaseId) {
      continue;
    }

    result[normalizedUseCase] = normalizedKnowledgeBaseId;
  }

  return result;
}

function getConfiguredUseCaseKnowledgeBaseMap(): UseCaseKnowledgeBaseMap {
  const configFromNamedEnvVars: UseCaseKnowledgeBaseMap = {};

  for (const [useCase, knowledgeBaseId] of Object.entries(USE_CASE_KB_ENV_KEY_MAP)) {
    const normalizedKnowledgeBaseId = trimToNull(knowledgeBaseId);
    if (normalizedKnowledgeBaseId) {
      configFromNamedEnvVars[useCase] = normalizedKnowledgeBaseId;
    }
  }

  const rawJsonMap = process.env.CALLING_USE_CASE_KB_ID_MAP;
  if (!rawJsonMap) {
    return configFromNamedEnvVars;
  }

  try {
    const parsed = JSON.parse(rawJsonMap);
    const parsedMap = parseUseCaseKnowledgeBaseMap(parsed);

    return {
      ...configFromNamedEnvVars,
      ...parsedMap,
    };
  } catch (error) {
    console.warn('Invalid CALLING_USE_CASE_KB_ID_MAP JSON:', error);

    return configFromNamedEnvVars;
  }
}

function resolveKnowledgeBaseId(params: {
  explicitKnowledgeBaseId?: string;
  useCase?: string;
}): string | null {
  const explicitKnowledgeBaseId = trimToNull(params.explicitKnowledgeBaseId);
  if (explicitKnowledgeBaseId) {
    return explicitKnowledgeBaseId;
  }

  const normalizedUseCase = trimToNull(params.useCase)?.toLowerCase();
  if (!normalizedUseCase) {
    return null;
  }

  const useCaseKnowledgeBaseMap = getConfiguredUseCaseKnowledgeBaseMap();
  return useCaseKnowledgeBaseMap[normalizedUseCase] ?? null;
}

async function updateAssistantKnowledgeBase(params: {
  assistantId: string;
  knowledgeBaseId: string;
}): Promise<void> {
  const response = await fetch(
    `${MONADE_API_BASE_URL}/api/assistants/${encodeURIComponent(params.assistantId)}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        knowledgeBase: params.knowledgeBaseId,
      }),
    }
  );

  if (response.ok) {
    return;
  }

  const responseText = await response.text();
  let errorMessage = 'Failed to update assistant knowledge base';

  if (responseText) {
    try {
      const parsed = JSON.parse(responseText) as { error?: string; message?: string; detail?: string };
      errorMessage = parsed.error ?? parsed.message ?? parsed.detail ?? errorMessage;
    } catch {
      errorMessage = responseText;
    }
  }

  throw new Error(errorMessage);
}

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
    const {
      phone_number,
      assistant_id,
      trunk_name,
      use_case,
      knowledge_base_id,
      callee_info,
    } = body;

    if (!phone_number || !assistant_id) {
      return NextResponse.json(
        { error: 'phone_number and assistant_id are required' },
        { status: 400 }
      );
    }

    const serverApiKey = trimToNull(process.env.CALLING_API_KEY);
    if (!serverApiKey) {
      return NextResponse.json({ error: 'Server is missing CALLING_API_KEY.' }, { status: 500 });
    }

    const formattedPhoneNumber = formatPhoneNumber(phone_number);

    if (formattedPhoneNumber === '+') {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }

    const mappedTrunkName = mapTrunkName(trunk_name);
    const normalizedUseCase = trimToNull(use_case)?.toLowerCase();
    const resolvedKnowledgeBaseId = resolveKnowledgeBaseId({
      explicitKnowledgeBaseId: knowledge_base_id,
      useCase: normalizedUseCase ?? undefined,
    });

    if (normalizedUseCase && !resolvedKnowledgeBaseId) {
      return NextResponse.json(
        {
          error: `No knowledge base configured for use_case "${normalizedUseCase}". Set CALLING_USE_CASE_KB_ID_MAP or CALLING_KB_ID_* env vars.`,
        },
        { status: 400 }
      );
    }

    if (resolvedKnowledgeBaseId) {
      await updateAssistantKnowledgeBase({
        assistantId: assistant_id,
        knowledgeBaseId: resolvedKnowledgeBaseId,
      });
    }

    const metadata: Record<string, unknown> =
      callee_info && typeof callee_info === 'object'
        ? { ...callee_info }
        : {};

    if (normalizedUseCase && metadata.use_case === undefined) {
      metadata.use_case = normalizedUseCase;
    }

    if (resolvedKnowledgeBaseId && metadata.knowledge_base_id === undefined) {
      metadata.knowledge_base_id = resolvedKnowledgeBaseId;
    }

    const upstreamPayload: {
      assistant_id: string;
      metadata: Record<string, unknown>;
      telephony?: { trunk_name: string };
    } = {
      assistant_id,
      metadata,
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
          'X-API-Key': serverApiKey,
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
