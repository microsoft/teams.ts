// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as endpoints from '@microsoft/teams.graph-endpoints';

import { app } from './app';

export type UserMatch = {
  id: string;
  displayName: string | null;
  userPrincipalName: string | null;
};

export const graphClient = {
  async searchUsers(query: string, top = 5): Promise<UserMatch[]> {
    const result = await app.graph.call(endpoints.users.list, {
      ConsistencyLevel: 'eventual',
      '$search': `"displayName:${query}" OR "userPrincipalName:${query}"`,
      '$select': ['id', 'displayName', 'userPrincipalName'],
      '$top': top,
    });

    return (result.value ?? []).map((u) => {
      if (!u.id) throw new Error(`Graph returned a user with no id: ${JSON.stringify(u)}`);
      return {
        id: u.id,
        displayName: u.displayName ?? null,
        userPrincipalName: u.userPrincipalName ?? null,
      };
    });
  },
};

