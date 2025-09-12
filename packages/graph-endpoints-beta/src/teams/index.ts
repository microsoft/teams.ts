export * as channels from './channels';
export * as group from './group';
export * as installedApps from './installedApps';
export * as members from './members';
export * as owners from './owners';
export * as primaryChannel from './primaryChannel';
export * as schedule from './schedule';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}': Operation<'/teams/{team-id}', 'delete'>;
  'GET /teams': Operation<'/teams', 'get'>;
  'GET /teams/{team-id}': Operation<'/teams/{team-id}', 'get'>;
  'PATCH /teams/{team-id}': Operation<'/teams/{team-id}', 'patch'>;
  'POST /teams': Operation<'/teams', 'post'>;
  'GET /teams/{team-id}/allChannels': Operation<'/teams/{team-id}/allChannels', 'get'>;
  'GET /teams/{team-id}/allChannels/{channel-id}': Operation<
    '/teams/{team-id}/allChannels/{channel-id}',
    'get'
  >;
  'POST /teams/{team-id}/archive': Operation<'/teams/{team-id}/archive', 'post'>;
  'POST /teams/{team-id}/clone': Operation<'/teams/{team-id}/clone', 'post'>;
  'POST /teams/{team-id}/completeMigration': Operation<
    '/teams/{team-id}/completeMigration',
    'post'
  >;
  'GET /teams/{team-id}/incomingChannels': Operation<'/teams/{team-id}/incomingChannels', 'get'>;
  'GET /teams/{team-id}/incomingChannels/{channel-id}': Operation<
    '/teams/{team-id}/incomingChannels/{channel-id}',
    'get'
  >;
  'GET /teams/{team-id}/operations': Operation<'/teams/{team-id}/operations', 'get'>;
  'POST /teams/{team-id}/operations': Operation<'/teams/{team-id}/operations', 'post'>;
  'GET /teams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /teams/{team-id}/permissionGrants': Operation<'/teams/{team-id}/permissionGrants', 'get'>;
  'POST /teams/{team-id}/permissionGrants': Operation<'/teams/{team-id}/permissionGrants', 'post'>;
  'GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /teams/{team-id}/photo': Operation<'/teams/{team-id}/photo', 'get'>;
  'PATCH /teams/{team-id}/photo': Operation<'/teams/{team-id}/photo', 'patch'>;
  'POST /teams/{team-id}/sendActivityNotification': Operation<
    '/teams/{team-id}/sendActivityNotification',
    'post'
  >;
  'GET /teams/{team-id}/template': Operation<'/teams/{team-id}/template', 'get'>;
  'GET /teams/{team-id}/templateDefinition': Operation<
    '/teams/{team-id}/templateDefinition',
    'get'
  >;
  'POST /teams/{team-id}/unarchive': Operation<'/teams/{team-id}/unarchive', 'post'>;
}

/**
 * `DELETE /teams/{team-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
 * `GET /teams`
 *
 * List all teams in an organization.
 */
export function list(
  params?: IEndpoints['GET /teams']['parameters']
): EndpointRequest<IEndpoints['GET /teams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}`
 *
 * Retrieve the properties and relationships of the specified team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}`
 *
 * Update the properties of the specified team.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams`
 *
 * Create a new team.
 */
export function create(
  body: IEndpoints['POST /teams']['body']
): EndpointRequest<IEndpoints['POST /teams']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams',
    body,
  };
}

export const allChannels = {
  /**
   * `GET /teams/{team-id}/allChannels`
   *
   * Get the list of channels either in this team or shared with this team (incoming channels).
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/allChannels']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/allChannels']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/allChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `GET /teams/{team-id}/allChannels/{channel-id}`
   *
   * List of channels either hosted in or shared with the team (incoming channels).
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/allChannels/{channel-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/allChannels/{channel-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/allChannels/{channel-id}',
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
  * `POST /teams/{team-id}/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team continue to be allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which can occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/archive']['body'],
    params?: IEndpoints['POST /teams/{team-id}/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/archive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/archive',
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
  * `POST /teams/{team-id}/clone`
  *
  * Create a copy of a team. This operation also creates a copy of the corresponding group.
You can specify which parts of the team to clone: When tabs are cloned, they aren&#x27;t configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. 
If the user who opens the tab doesn&#x27;t have permission to configure apps, they see a message that says that the tab isn&#x27;t configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it&#x27;s running, succeeded, or failed. You should continue to GET until the status isn&#x27;t running. The recommended delay between GETs is 5 seconds.
  */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/clone']['body'],
    params?: IEndpoints['POST /teams/{team-id}/clone']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/clone']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/clone',
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
   * `POST /teams/{team-id}/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a team. Migration mode is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/completeMigration']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/completeMigration']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/completeMigration',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const incomingChannels = {
  /**
   * `GET /teams/{team-id}/incomingChannels`
   *
   * Get the list of incoming channels (channels shared with a team).
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/incomingChannels']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/incomingChannels']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/incomingChannels',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `GET /teams/{team-id}/incomingChannels/{channel-id}`
   *
   * List of channels shared with the team.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/incomingChannels/{channel-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/incomingChannels/{channel-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/incomingChannels/{channel-id}',
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
   * `GET /teams/{team-id}/operations`
   *
   * The async operations that ran or are running on this team.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/operations']['body'],
    params?: IEndpoints['POST /teams/{team-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/operations',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   * The async operations that ran or are running on this team.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['team-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
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
   * `GET /teams/{team-id}/permissionGrants`
   *
   * List all resource-specific permission grants on the team. This list specifies the Microsoft Entra apps that have access to the team, along with the corresponding kind of resource-specific access that each app has.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /teams/{team-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/permissionGrants',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps to access the team.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['team-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
   * `GET /teams/{team-id}/photo`
   *
   * The team photo.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/photo`
   *
   * Update the photo for the specified contact, group, team, or user in a tenant. The size of the photo you can update to is limited to 4 MB. You can use either PATCH or PUT for this operation.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/photo']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/photo',
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
   * `POST /teams/{team-id}/sendActivityNotification`
   *
   * Send an activity feed notification in the scope of a team. For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/sendActivityNotification']['body'],
    params?: IEndpoints['POST /teams/{team-id}/sendActivityNotification']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/sendActivityNotification']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/sendActivityNotification',
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
   * `GET /teams/{team-id}/template`
   *
   * The template this team was created from. See available templates.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/template']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/template']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/template',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
};

export const templateDefinition = {
  /**
   * `GET /teams/{team-id}/templateDefinition`
   *
   * Generic representation of a team template definition for a team with a specific structure and configuration.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/templateDefinition']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/templateDefinition']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/templateDefinition',
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
   * `POST /teams/{team-id}/unarchive`
   *
   * Restore an archived team and restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. Teams are archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/unarchive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/unarchive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};
