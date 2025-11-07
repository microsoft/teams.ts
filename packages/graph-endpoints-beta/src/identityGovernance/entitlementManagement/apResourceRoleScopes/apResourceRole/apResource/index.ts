export * as accessPackageResourceScopes from './scopes';
export * as uploadSessions from './uploadSessions';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceEnvironment': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceEnvironment',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'delete'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/refresh': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}

export const accessPackageResourceEnvironment = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceEnvironment`
   *
   * Contains the environment information for the resource. This environment can be set using either the @odata.bind annotation or the environment&#x27;s originId. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceEnvironment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceEnvironment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceEnvironment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
};

export const accessPackageResourceRoles = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles`
   *
   * Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
   *
   * Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/refresh`
   *
   * In Microsoft Entra entitlement management, refresh the accessPackageResource object to fetch the latest details for displayName, description, and resourceType from the origin system. For the AadApplication originSystem, this operation also updates the displayName and description for the accessPackageResourceRole.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole/accessPackageResource/refresh',
      paramDefs: {
        path: ['accessPackageResourceRoleScope-id'],
      },
      params,
    };
  },
};
