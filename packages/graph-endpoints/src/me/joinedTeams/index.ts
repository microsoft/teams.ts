export * as channels from './channels';
export * as group from './group';
export * as installedApps from './installedApps';
export * as members from './members';
export * as primaryChannel from './primaryChannel';
export * as schedule from './schedule';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'delete'>;
  'GET /me/joinedTeams': Operation<'/me/joinedTeams', 'get'>;
  'GET /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'get'>;
  'PATCH /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'patch'>;
  'POST /me/joinedTeams': Operation<'/me/joinedTeams', 'post'>;
  'GET /me/joinedTeams/{team-id}/allChannels': Operation<
    '/me/joinedTeams/{team-id}/allChannels',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/allChannels/{channel-id}': Operation<
    '/me/joinedTeams/{team-id}/allChannels/{channel-id}',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/archive': Operation<'/me/joinedTeams/{team-id}/archive', 'post'>;
  'POST /me/joinedTeams/{team-id}/clone': Operation<'/me/joinedTeams/{team-id}/clone', 'post'>;
  'POST /me/joinedTeams/{team-id}/completeMigration': Operation<
    '/me/joinedTeams/{team-id}/completeMigration',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/incomingChannels': Operation<
    '/me/joinedTeams/{team-id}/incomingChannels',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}': Operation<
    '/me/joinedTeams/{team-id}/incomingChannels/{channel-id}',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/operations': Operation<
    '/me/joinedTeams/{team-id}/operations',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/operations': Operation<
    '/me/joinedTeams/{team-id}/operations',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/permissionGrants': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/permissionGrants': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/photo': Operation<'/me/joinedTeams/{team-id}/photo', 'get'>;
  'PATCH /me/joinedTeams/{team-id}/photo': Operation<'/me/joinedTeams/{team-id}/photo', 'patch'>;
  'POST /me/joinedTeams/{team-id}/sendActivityNotification': Operation<
    '/me/joinedTeams/{team-id}/sendActivityNotification',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/template': Operation<'/me/joinedTeams/{team-id}/template', 'get'>;
  'POST /me/joinedTeams/{team-id}/unarchive': Operation<
    '/me/joinedTeams/{team-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/joinedTeams/{team-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams`
 *
 * Get the teams in Microsoft Teams that the user is a direct member of.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/joinedTeams/{team-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams']['body']
): EndpointRequest<IEndpoints['POST /me/joinedTeams']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams',
    body,
  };
}

export const allChannels = {
  /**
   * `GET /me/joinedTeams/{team-id}/allChannels`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/allChannels']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/allChannels']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/allChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/allChannels/{channel-id}`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/allChannels/{channel-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/allChannels/{channel-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/allChannels/{channel-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const archive = {
  /**
  * `POST /me/joinedTeams/{team-id}/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team are still allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which might occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/archive']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/archive']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/archive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const clone = {
  /**
  * `POST /me/joinedTeams/{team-id}/clone`
  *
  * Create a copy of a team. This operation also creates a copy of the corresponding group.
You can specify which parts of the team to clone: When tabs are cloned, they aren&#x27;t configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. 
If the user who opens the tab doesn&#x27;t have permission to configure apps, they see a message that says that the tab isn&#x27;t configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it&#x27;s running, succeeded, or failed. You should continue to GET until the status isn&#x27;t running. The recommended delay between GETs is 5 seconds.
  */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/clone']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/clone']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/clone']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/clone',
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
   * `POST /me/joinedTeams/{team-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/completeMigration']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/completeMigration']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/completeMigration',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const incomingChannels = {
  /**
   * `GET /me/joinedTeams/{team-id}/incomingChannels`
   *
   * List of channels shared with the team.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/incomingChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}`
   *
   * List of channels shared with the team.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/incomingChannels/{channel-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/incomingChannels/{channel-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /me/joinedTeams/{team-id}/operations`
   *
   * The async operations that ran or are running on this team.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/operations']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/operations']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/operations']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/operations',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   * The async operations that ran or are running on this team.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['team-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /me/joinedTeams/{team-id}/permissionGrants`
   *
   * A collection of permissions granted to apps to access the team.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/permissionGrants']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/permissionGrants',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps to access the team.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /me/joinedTeams/{team-id}/photo`
   *
   * The profile photo for the team.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/photo']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/photo']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/joinedTeams/{team-id}/photo']['response']> {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/photo',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const sendActivityNotification = {
  /**
  * `POST /me/joinedTeams/{team-id}/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/sendActivityNotification']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/sendActivityNotification']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/sendActivityNotification']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/sendActivityNotification',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const template = {
  /**
   * `GET /me/joinedTeams/{team-id}/template`
   *
   * The template this team was created from. See available templates.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/template']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/template']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/template',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /me/joinedTeams/{team-id}/unarchive`
   *
   * Restore an archived team. This API restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. A Team is archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/unarchive']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/unarchive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};
