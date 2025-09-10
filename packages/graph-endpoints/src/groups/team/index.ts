export * as channels from './channels';
export * as group from './group';
export * as installedApps from './installedApps';
export * as members from './members';
export * as primaryChannel from './primaryChannel';
export * as schedule from './schedule';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team': Operation<'/groups/{group-id}/team', 'delete'>;
  'GET /groups/{group-id}/team': Operation<'/groups/{group-id}/team', 'get'>;
  'PUT /groups/{group-id}/team': Operation<'/groups/{group-id}/team', 'put'>;
  'GET /groups/{group-id}/team/allChannels': Operation<
    '/groups/{group-id}/team/allChannels',
    'get'
  >;
  'GET /groups/{group-id}/team/allChannels/{channel-id}': Operation<
    '/groups/{group-id}/team/allChannels/{channel-id}',
    'get'
  >;
  'POST /groups/{group-id}/team/archive': Operation<'/groups/{group-id}/team/archive', 'post'>;
  'POST /groups/{group-id}/team/clone': Operation<'/groups/{group-id}/team/clone', 'post'>;
  'POST /groups/{group-id}/team/completeMigration': Operation<
    '/groups/{group-id}/team/completeMigration',
    'post'
  >;
  'GET /groups/{group-id}/team/incomingChannels': Operation<
    '/groups/{group-id}/team/incomingChannels',
    'get'
  >;
  'GET /groups/{group-id}/team/incomingChannels/{channel-id}': Operation<
    '/groups/{group-id}/team/incomingChannels/{channel-id}',
    'get'
  >;
  'GET /groups/{group-id}/team/operations': Operation<'/groups/{group-id}/team/operations', 'get'>;
  'POST /groups/{group-id}/team/operations': Operation<
    '/groups/{group-id}/team/operations',
    'post'
  >;
  'GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}': Operation<
    '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}': Operation<
    '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}': Operation<
    '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/permissionGrants': Operation<
    '/groups/{group-id}/team/permissionGrants',
    'get'
  >;
  'POST /groups/{group-id}/team/permissionGrants': Operation<
    '/groups/{group-id}/team/permissionGrants',
    'post'
  >;
  'GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/photo': Operation<'/groups/{group-id}/team/photo', 'get'>;
  'PATCH /groups/{group-id}/team/photo': Operation<'/groups/{group-id}/team/photo', 'patch'>;
  'POST /groups/{group-id}/team/sendActivityNotification': Operation<
    '/groups/{group-id}/team/sendActivityNotification',
    'post'
  >;
  'GET /groups/{group-id}/team/template': Operation<'/groups/{group-id}/team/template', 'get'>;
  'POST /groups/{group-id}/team/unarchive': Operation<'/groups/{group-id}/team/unarchive', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/team`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team`
 *
 * The team associated with this group.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /groups/{group-id}/team`
 *
 * Create a new team under a group. In order to create a team, the group must have at least one owner. If the group was created less than 15 minutes ago, calls to create a team might fail with a 404 Not Found error code because the group information didn&#x27;t fully replicate.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/team']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/team']['parameters']
): EndpointRequest<IEndpoints['PUT /groups/{group-id}/team']['response']> {
  return {
    method: 'put',
    path: '/groups/{group-id}/team',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const allChannels = {
  /**
   * `GET /groups/{group-id}/team/allChannels`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/allChannels']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/allChannels']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/allChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/team/allChannels/{channel-id}`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/allChannels/{channel-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/allChannels/{channel-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/allChannels/{channel-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};

export const archive = {
  /**
  * `POST /groups/{group-id}/team/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team are still allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which might occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/archive']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/archive']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/archive',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const clone = {
  /**
  * `POST /groups/{group-id}/team/clone`
  *
  * Create a copy of a team. This operation also creates a copy of the corresponding group.
You can specify which parts of the team to clone: When tabs are cloned, they aren&#x27;t configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. 
If the user who opens the tab doesn&#x27;t have permission to configure apps, they see a message that says that the tab isn&#x27;t configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it&#x27;s running, succeeded, or failed. You should continue to GET until the status isn&#x27;t running. The recommended delay between GETs is 5 seconds.
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/clone']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/clone']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/clone']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/clone',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /groups/{group-id}/team/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/completeMigration']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/completeMigration']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/completeMigration',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const incomingChannels = {
  /**
   * `GET /groups/{group-id}/team/incomingChannels`
   *
   * List of channels shared with the team.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/incomingChannels']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/incomingChannels']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/incomingChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/team/incomingChannels/{channel-id}`
   *
   * List of channels shared with the team.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/incomingChannels/{channel-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/incomingChannels/{channel-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/incomingChannels/{channel-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'channel-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /groups/{group-id}/team/operations`
   *
   * The async operations that ran or are running on this team.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/operations']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/operations']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/operations']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/operations',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}`
   *
   * The async operations that ran or are running on this team.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['group-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/team/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /groups/{group-id}/team/permissionGrants`
   *
   * A collection of permissions granted to apps to access the team.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/permissionGrants']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/permissionGrants']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/permissionGrants']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/permissionGrants',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps to access the team.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['group-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /groups/{group-id}/team/photo`
   *
   * The profile photo for the team.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/photo']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/photo']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/photo']['response']> {
    return {
      method: 'patch',
      path: '/groups/{group-id}/team/photo',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const sendActivityNotification = {
  /**
  * `POST /groups/{group-id}/team/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/sendActivityNotification']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/sendActivityNotification']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/sendActivityNotification']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/sendActivityNotification',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const template = {
  /**
   * `GET /groups/{group-id}/team/template`
   *
   * The template this team was created from. See available templates.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/template']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/template']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/template',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /groups/{group-id}/team/unarchive`
   *
   * Restore an archived team. This API restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. A Team is archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/unarchive']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/unarchive',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};
