import { ConfidentialClientApplication } from '@azure/msal-node';
import { Client } from '@microsoft/teams.api';
import { Client as HttpClient } from '@microsoft/teams.common';

export interface TestConfig {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  serviceUrl: string;
  conversationId: string;
  userId: string;
  teamId: string;
  channelId: string;
  meetingId: string;
  userId2?: string;
  agenticAppId?: string;
  agenticUserId?: string;
  scope?: string;
}

export interface TestFixture {
  config: TestConfig;
  api: Client;
  cachedMembers: Array<{ id: string; name?: string; aadObjectId?: string }>;
  memberMri1: string;
  memberMri2: string | undefined;
  isCanary: boolean;
  isAgentic: boolean;
}

function loadConfig(): TestConfig {
  const env = (name: string, fallback?: string): string => {
    const value = process.env[name] ?? fallback;
    if (!value) {
      throw new Error(`Missing required env var: ${name}`);
    }
    return value;
  };

  return {
    tenantId: env('AZURE_TENANT_ID'),
    clientId: env('AZURE_CLIENT_ID'),
    clientSecret: env('AZURE_CLIENT_SECRET'),
    serviceUrl: env('TEST_SERVICE_URL'),
    conversationId: env('TEST_CONVERSATION_ID'),
    userId: env('TEST_USER_ID'),
    teamId: env('TEST_TEAM_ID'),
    channelId: env('TEST_CHANNEL_ID'),
    meetingId: env('TEST_MEETING_ID'),
    userId2: process.env['TEST_USER_ID_2'],
    agenticAppId: process.env['TEST_AGENTIC_APP_ID'],
    agenticUserId: process.env['TEST_AGENTIC_USER_ID'],
    scope: process.env['AZURE_SCOPE'],
  };
}

let _fixture: TestFixture | undefined;

/**
 * Shared fixture — initialized once before all tests.
 * Acquires a token via MSAL client credentials and caches conversation members.
 */
export async function getFixture(): Promise<TestFixture> {
  if (_fixture) return _fixture;

  const config = loadConfig();

  // Acquire token via MSAL
  const msalApp = new ConfidentialClientApplication({
    auth: {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      authority: `https://login.microsoftonline.com/${config.tenantId}`,
    },
  });

  const scope = config.scope ?? 'https://api.botframework.com/.default';
  const tokenResponse = await msalApp.acquireTokenByClientCredential({
    scopes: [scope],
  });

  if (!tokenResponse?.accessToken) {
    throw new Error('Failed to acquire token');
  }

  const token = tokenResponse.accessToken;

  // Create API client with the acquired token
  const http = new HttpClient({
    token,
    baseUrl: config.serviceUrl,
  });

  const api = new Client(config.serviceUrl, http);

  // Cache members (avoids throttling from repeated /members calls)
  const members = await api.conversations.members(config.conversationId).get();

  const isCanary = config.serviceUrl.includes('canary');
  const isAgentic = !!(config.agenticAppId && config.agenticUserId);

  _fixture = {
    config,
    api,
    cachedMembers: members as Array<{ id: string; name?: string; aadObjectId?: string }>,
    memberMri1: members[0]?.id ?? '',
    memberMri2: members[1]?.id,
    isCanary,
    isAgentic,
  };

  return _fixture;
}
