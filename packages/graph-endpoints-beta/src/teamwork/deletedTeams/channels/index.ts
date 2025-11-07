export * as allMembers from './allMembers';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as planner from './planner';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration',
    'post'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps/{teamsApp-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps/{teamsApp-id}',
    'get'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedTeam-id', 'channel-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels`
 *
 * The channels those are either shared with this deleted team or created in this deleted team.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    paramDefs: {
      path: ['deletedTeam-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
 *
 * The channels those are either shared with this deleted team or created in this deleted team.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    paramDefs: {
      path: ['deletedTeam-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive`
   *
   * Archive a channel in a team. When a channel is archived, users can&#x27;t send new messages or react to existing messages in the channel, edit the channel settings, or make other changes to the channel. You can delete an archived channel or add and remove members from it. If you archive a team, its channels are also archived. Archiving is an asynchronous operation; a channel is archived after the asynchronous archiving operation completes successfully, which might occur after the response returns. A channel without an owner or that belongs to a group that has no owner, can&#x27;t be archived. To restore a channel from its archived state, use the channel: unarchive method. A channel can’t be archived or unarchived if its team is archived.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
};

export const enabledApps = {
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps`
   *
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps/{teamsApp-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps/{teamsApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps/{teamsApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/enabledApps/{teamsApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deletedTeam-id', 'channel-id', 'teamsApp-id'],
      },
      params,
    };
  },
};

export const provisionEmail = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail`
   *
   * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it didn&#x27;t provisioned one. To remove the email address of a channel, use the removeEmail method.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
};

export const removeEmail = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail`
   *
   * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive`
   *
   * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
    };
  },
};
