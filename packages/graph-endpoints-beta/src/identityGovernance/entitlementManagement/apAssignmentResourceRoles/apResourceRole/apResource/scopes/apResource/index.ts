export * as uploadSessions from './uploadSessions';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'delete'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    paramDefs: {
      path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    paramDefs: {
      path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
    },
    params,
    body,
  };
}

export const accessPackageResourceEnvironment = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment`
   *
   * Contains the environment information for the resource. This environment can be set using either the @odata.bind annotation or the environment&#x27;s originId. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
      },
      params,
    };
  },
};

export const accessPackageResourceRoles = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles`
   *
   * Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles',
      paramDefs: {
        path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
   *
   * Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageAssignmentResourceRole-id',
          'accessPackageResourceScope-id',
          'accessPackageResourceRole-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
      paramDefs: {
        path: [
          'accessPackageAssignmentResourceRole-id',
          'accessPackageResourceScope-id',
          'accessPackageResourceRole-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessPackageAssignmentResourceRole-id',
          'accessPackageResourceScope-id',
          'accessPackageResourceRole-id',
        ],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh`
   *
   * In Microsoft Entra entitlement management, refresh the accessPackageResource object to fetch the latest details for displayName, description, and resourceType from the origin system. For the AadApplication originSystem, this operation also updates the displayName and description for the accessPackageResourceRole.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh',
      paramDefs: {
        path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
      },
      params,
    };
  },
};
