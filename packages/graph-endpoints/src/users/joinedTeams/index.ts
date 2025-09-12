export * as channels from './channels';
export * as group from './group';
export * as installedApps from './installedApps';
export * as members from './members';
export * as primaryChannel from './primaryChannel';
export * as schedule from './schedule';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams': Operation<'/users/{user-id}/joinedTeams', 'get'>;
  'GET /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams': Operation<'/users/{user-id}/joinedTeams', 'post'>;
  'GET /users/{user-id}/joinedTeams/{team-id}/allChannels': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/allChannels',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/allChannels/{channel-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/allChannels/{channel-id}',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/archive': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/archive',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/clone': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/clone',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/completeMigration': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/completeMigration',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/incomingChannels',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels/{channel-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/incomingChannels/{channel-id}',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/operations': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/operations',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/operations': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/operations',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/permissionGrants',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/permissionGrants': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/permissionGrants',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/photo': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/photo',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/photo': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/photo',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/sendActivityNotification',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/template': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/template',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/unarchive': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: {
      path: ['user-id', 'team-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const allChannels = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/allChannels`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/allChannels']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/allChannels']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/allChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/allChannels/{channel-id}`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/allChannels/{channel-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/allChannels/{channel-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/allChannels/{channel-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const archive = {
  /**
  * `POST /users/{user-id}/joinedTeams/{team-id}/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team are still allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which might occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/archive']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/archive']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/archive',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const clone = {
  /**
  * `POST /users/{user-id}/joinedTeams/{team-id}/clone`
  *
  * Create a copy of a team. This operation also creates a copy of the corresponding group.
You can specify which parts of the team to clone: When tabs are cloned, they aren&#x27;t configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. 
If the user who opens the tab doesn&#x27;t have permission to configure apps, they see a message that says that the tab isn&#x27;t configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it&#x27;s running, succeeded, or failed. You should continue to GET until the status isn&#x27;t running. The recommended delay between GETs is 5 seconds.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/clone']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/clone']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/clone']['response']> {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/clone',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/completeMigration']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/completeMigration',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
};

export const incomingChannels = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels`
   *
   * List of channels shared with the team.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/incomingChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels/{channel-id}`
   *
   * List of channels shared with the team.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels/{channel-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/incomingChannels/{channel-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/incomingChannels/{channel-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'channel-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/operations`
   *
   * The async operations that ran or are running on this team.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/operations']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/operations']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/operations']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/operations',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   * The async operations that ran or are running on this team.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants`
   *
   * A collection of permissions granted to apps to access the team.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/permissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/permissionGrants']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/permissionGrants',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps to access the team.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/photo`
   *
   * The profile photo for the team.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/photo']['response']> {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/photo']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/photo']['response']> {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/photo',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const sendActivityNotification = {
  /**
  * `POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/sendActivityNotification',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const template = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/template`
   *
   * The template this team was created from. See available templates.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/template']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/template']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/template',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/unarchive`
   *
   * Restore an archived team. This API restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. A Team is archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/unarchive']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/unarchive',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
};
