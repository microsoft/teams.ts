// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Client } from '@microsoft/teams.graph';

import * as endpoints from '@microsoft/teams.graph-endpoints';

import { app } from './app';

export type UserMatch = {
  id: string |  null;
  displayName: string | null;
  userPrincipalName: string | null;
};

async function getAppToken(): Promise<string> {
  const token = await app.tokenManager.getGraphToken();
  if (!token) throw new Error('Failed to acquire app Graph token — check CLIENT_ID / CLIENT_SECRET / TENANT_ID.');
  return token.toString();
}

// Singleton Graph client backed by the app's token manager (MSAL, cached).
const _client = new Client({ token: () => getAppToken() });

export const graphClient = {
  async searchUsers(query: string, top = 5): Promise<UserMatch[]> {
    const result = await _client.call(endpoints.users.list, {
      ConsistencyLevel: 'eventual',
      '$search': `"displayName:${query}" OR "userPrincipalName:${query}"`,
      '$select': ['id', 'displayName', 'userPrincipalName'],
      '$top': top,
    });

    return (result.value ?? []).map((u) => ({
      id: u.id ?? null,
      displayName: u.displayName ?? null,
      userPrincipalName: u.userPrincipalName ?? null,
    }));
  },
};

