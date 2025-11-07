export * as allMembers from './allMembers';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as planner from './planner';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels': Operation<'/teams/{team-id}/channels', 'get'>;
  'GET /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels': Operation<'/teams/{team-id}/channels', 'post'>;
  'POST /teams/{team-id}/channels/{channel-id}/archive': Operation<
    '/teams/{team-id}/channels/{channel-id}/archive',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/completeMigration': Operation<
    '/teams/{team-id}/channels/{channel-id}/completeMigration',
    'post'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/enabledApps': Operation<
    '/teams/{team-id}/channels/{channel-id}/enabledApps',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/enabledApps/{teamsApp-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/enabledApps/{teamsApp-id}',
    'get'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/provisionEmail': Operation<
    '/teams/{team-id}/channels/{channel-id}/provisionEmail',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/removeEmail': Operation<
    '/teams/{team-id}/channels/{channel-id}/removeEmail',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/unarchive': Operation<
    '/teams/{team-id}/channels/{channel-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}`
 *
 * Delete the channel.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels`
 *
 * Retrieve the list of channels in this team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}`
 *
 * Retrieve the properties and relationships of a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve channel information.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}`
 *
 * Update the properties of the specified channel.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}',
    paramDefs: {
      path: ['team-id', 'channel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels`
 *
 * Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel&#x27;s displayName is 50 characters. This display name appears to the user in Microsoft Teams. You can add a maximum of 200 members when you create a private channel.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/archive`
   *
   * Archive a channel in a team. When a channel is archived, users can&#x27;t send new messages or react to existing messages in the channel, edit the channel settings, or make other changes to the channel. You can delete an archived channel or add and remove members from it. If you archive a team, its channels are also archived. Archiving is an asynchronous operation; a channel is archived after the asynchronous archiving operation completes successfully, which might occur after the response returns. A channel without an owner or that belongs to a group that has no owner, can&#x27;t be archived. To restore a channel from its archived state, use the channel: unarchive method. A channel can’t be archived or unarchived if its team is archived.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/archive']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/archive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/archive',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/completeMigration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/completeMigration',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const enabledApps = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/enabledApps`
   *
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/enabledApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/enabledApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/enabledApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/enabledApps/{teamsApp-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/enabledApps/{teamsApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/enabledApps/{teamsApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/enabledApps/{teamsApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'teamsApp-id'],
      },
      params,
    };
  },
};

export const provisionEmail = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/provisionEmail`
   *
   * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it didn&#x27;t provisioned one. To remove the email address of a channel, use the removeEmail method.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/provisionEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/provisionEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/provisionEmail',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const removeEmail = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/removeEmail`
   *
   * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/removeEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/removeEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/removeEmail',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/unarchive`
   *
   * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/unarchive',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};
