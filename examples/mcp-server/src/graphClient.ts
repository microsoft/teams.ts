// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// App-only Microsoft Graph client using @microsoft/teams.graph and
// @microsoft/teams.graph-endpoints. Acquires a token via the client credentials
// flow and wraps the /users list endpoint for user search.
// Requires User.ReadBasic.All (Application) consent.

import { Client } from '@microsoft/teams.graph';

import * as endpoints from '@microsoft/teams.graph-endpoints';

export type UserMatch = {
  id: string;
  displayName: string | null;
  userPrincipalName: string | null;
};

// Module-level token cache for the client-credentials token.
let _cachedToken: string | null = null;
let _tokenExpiry = 0;

async function getAppToken(): Promise<string> {
  if (_cachedToken && Date.now() < _tokenExpiry) {
    return _cachedToken;
  }

  const tenantId = required('TENANT_ID');
  const clientId = required('CLIENT_ID');
  const clientSecret = required('CLIENT_SECRET');

  const resp = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'https://graph.microsoft.com/.default',
      }),
    }
  );

  if (!resp.ok) {
    throw new Error(`Token request failed: ${resp.status} ${resp.statusText}`);
  }

  const data = (await resp.json()) as { access_token: string; expires_in: number };
  _cachedToken = data.access_token;
  // Subtract 60 s as a safety margin.
  _tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return _cachedToken;
}

// Singleton Graph client backed by the client-credentials token factory.
const _client = new Client({ token: () => getAppToken() });

export const graphClient = {
  async searchUsers(query: string, top = 5): Promise<UserMatch[]> {
    const result = await _client.call(endpoints.users.list, {
      ConsistencyLevel: 'eventual',
      '$search': `"displayName:${query}" OR "userPrincipalName:${query}"`,
      '$select': 'id,displayName,userPrincipalName',
      '$top': top,
    });

    return (result.value ?? []).map((u) => ({
      id: u.id ?? '',
      displayName: u.displayName ?? null,
      userPrincipalName: u.userPrincipalName ?? null,
    }));
  },
};

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} environment variable is required.`);
  return value;
}
