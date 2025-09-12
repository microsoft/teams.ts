export * as scheduledPermissionsApprovals from './scheduledPermissionsApprovals';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsManagement': Operation<
    '/identityGovernance/permissionsManagement',
    'delete'
  >;
  'GET /identityGovernance/permissionsManagement': Operation<
    '/identityGovernance/permissionsManagement',
    'get'
  >;
  'PATCH /identityGovernance/permissionsManagement': Operation<
    '/identityGovernance/permissionsManagement',
    'patch'
  >;
  'GET /identityGovernance/permissionsManagement/permissionsRequestChanges': Operation<
    '/identityGovernance/permissionsManagement/permissionsRequestChanges',
    'get'
  >;
  'POST /identityGovernance/permissionsManagement/permissionsRequestChanges': Operation<
    '/identityGovernance/permissionsManagement/permissionsRequestChanges',
    'post'
  >;
  'GET /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}': Operation<
    '/identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}': Operation<
    '/identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}',
    'patch'
  >;
  'DELETE /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}': Operation<
    '/identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}',
    'delete'
  >;
  'GET /identityGovernance/permissionsManagement/scheduledPermissionsRequests': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsRequests',
    'get'
  >;
  'POST /identityGovernance/permissionsManagement/scheduledPermissionsRequests': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsRequests',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsManagement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/permissionsManagement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsManagement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/permissionsManagement']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/permissionsManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsManagement']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/permissionsManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsManagement',
    body,
  };
}

export const permissionsRequestChanges = {
  /**
   * `GET /identityGovernance/permissionsManagement/permissionsRequestChanges`
   *
   * List the permissionsRequestChange objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/permissionsManagement/permissionsRequestChanges']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsManagement/permissionsRequestChanges']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsManagement/permissionsRequestChanges',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/permissionsManagement/permissionsRequestChanges`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/permissionsManagement/permissionsRequestChanges']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/permissionsManagement/permissionsRequestChanges']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/permissionsManagement/permissionsRequestChanges',
      body,
    };
  },
  /**
   * `GET /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}`
   *
   * Read the properties and relationships of a permissionsRequestChange object.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['permissionsRequestChange-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}',
      paramDefs: {
        path: ['permissionsRequestChange-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/permissionsManagement/permissionsRequestChanges/{permissionsRequestChange-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['permissionsRequestChange-id'],
      },
      params,
    };
  },
};

export const scheduledPermissionsRequests = {
  /**
   * `GET /identityGovernance/permissionsManagement/scheduledPermissionsRequests`
   *
   * Represents a permissions request that Permissions Management uses to manage permissions for an identity on resources in the authorization system. This request can be granted, rejected or canceled by identities in Permissions Management.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/permissionsManagement/scheduledPermissionsRequests`
   *
   * Create a new scheduledPermissionsRequest object.
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsRequests']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsRequests',
      body,
    };
  },
};
