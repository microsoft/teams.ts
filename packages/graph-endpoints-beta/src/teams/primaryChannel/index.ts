export * as allMembers from './allMembers';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as planner from './planner';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel': Operation<'/teams/{team-id}/primaryChannel', 'delete'>;
  'GET /teams/{team-id}/primaryChannel': Operation<'/teams/{team-id}/primaryChannel', 'get'>;
  'PATCH /teams/{team-id}/primaryChannel': Operation<'/teams/{team-id}/primaryChannel', 'patch'>;
  'POST /teams/{team-id}/primaryChannel/archive': Operation<
    '/teams/{team-id}/primaryChannel/archive',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/completeMigration': Operation<
    '/teams/{team-id}/primaryChannel/completeMigration',
    'post'
  >;
  'GET /teams/{team-id}/primaryChannel/enabledApps': Operation<
    '/teams/{team-id}/primaryChannel/enabledApps',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id}': Operation<
    '/teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id}',
    'get'
  >;
  'POST /teams/{team-id}/primaryChannel/provisionEmail': Operation<
    '/teams/{team-id}/primaryChannel/provisionEmail',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/removeEmail': Operation<
    '/teams/{team-id}/primaryChannel/removeEmail',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/unarchive': Operation<
    '/teams/{team-id}/primaryChannel/unarchive',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/primaryChannel']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel`
 *
 * Get the default channel, General, of a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/primaryChannel']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /teams/{team-id}/primaryChannel/archive`
   *
   * Archive a channel in a team. When a channel is archived, users can&#x27;t send new messages or react to existing messages in the channel, edit the channel settings, or make other changes to the channel. You can delete an archived channel or add and remove members from it. If you archive a team, its channels are also archived. Archiving is an asynchronous operation; a channel is archived after the asynchronous archiving operation completes successfully, which might occur after the response returns. A channel without an owner or that belongs to a group that has no owner, can&#x27;t be archived. To restore a channel from its archived state, use the channel: unarchive method. A channel can’t be archived or unarchived if its team is archived.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/archive']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/archive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/archive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /teams/{team-id}/primaryChannel/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/completeMigration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/completeMigration',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const enabledApps = {
  /**
   * `GET /teams/{team-id}/primaryChannel/enabledApps`
   *
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/primaryChannel/enabledApps']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/enabledApps']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/primaryChannel/enabledApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `GET /teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/primaryChannel/enabledApps/{teamsApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamsApp-id'],
      },
      params,
    };
  },
};

export const provisionEmail = {
  /**
   * `POST /teams/{team-id}/primaryChannel/provisionEmail`
   *
   * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it didn&#x27;t provisioned one. To remove the email address of a channel, use the removeEmail method.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/provisionEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/provisionEmail']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/provisionEmail',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const removeEmail = {
  /**
   * `POST /teams/{team-id}/primaryChannel/removeEmail`
   *
   * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/removeEmail']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/removeEmail']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/removeEmail',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /teams/{team-id}/primaryChannel/unarchive`
   *
   * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/unarchive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/unarchive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};
