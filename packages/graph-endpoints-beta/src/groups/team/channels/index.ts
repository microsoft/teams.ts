export * as allMembers from './allMembers';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as planner from './planner';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels': Operation<'/groups/{group-id}/team/channels', 'get'>;
  'GET /groups/{group-id}/team/channels/{channel-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels': Operation<'/groups/{group-id}/team/channels', 'post'>;
  'POST /groups/{group-id}/team/channels/{channel-id}/archive': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/archive',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/completeMigration': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/completeMigration',
    'post'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/enabledApps': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/enabledApps',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/enabledApps/{teamsApp-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/enabledApps/{teamsApp-id}',
    'get'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/provisionEmail': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/provisionEmail',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/removeEmail': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/removeEmail',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/unarchive': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'channel-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels`
 *
 * The collection of channels and messages associated with the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/channels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}`
 *
 * The collection of channels and messages associated with the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}',
    paramDefs: {
      path: ['group-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}',
    paramDefs: {
      path: ['group-id', 'channel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/channels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/channels',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/archive`
   *
   * Archive a channel in a team. When a channel is archived, users can&#x27;t send new messages or react to existing messages in the channel, edit the channel settings, or make other changes to the channel. You can delete an archived channel or add and remove members from it. If you archive a team, its channels are also archived. Archiving is an asynchronous operation; a channel is archived after the asynchronous archiving operation completes successfully, which might occur after the response returns. A channel without an owner or that belongs to a group that has no owner, can&#x27;t be archived. To restore a channel from its archived state, use the channel: unarchive method. A channel can’t be archived or unarchived if its team is archived.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/archive']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/archive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/archive',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/completeMigration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/completeMigration',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};

export const enabledApps = {
  /**
   * `GET /groups/{group-id}/team/channels/{channel-id}/enabledApps`
   *
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/enabledApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/enabledApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/channels/{channel-id}/enabledApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/team/channels/{channel-id}/enabledApps/{teamsApp-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/enabledApps/{teamsApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/enabledApps/{teamsApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/channels/{channel-id}/enabledApps/{teamsApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'channel-id', 'teamsApp-id'],
      },
      params,
    };
  },
};

export const provisionEmail = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/provisionEmail`
   *
   * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it didn&#x27;t provisioned one. To remove the email address of a channel, use the removeEmail method.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/provisionEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/provisionEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/provisionEmail',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};

export const removeEmail = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/removeEmail`
   *
   * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/removeEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/removeEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/removeEmail',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/unarchive`
   *
   * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/unarchive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/unarchive',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};
