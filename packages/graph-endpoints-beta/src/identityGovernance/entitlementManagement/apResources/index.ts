export * as accessPackageResourceRoles from './apResourceRoles';
export * as accessPackageResourceScopes from './apResourceScopes';
export * as uploadSessions from './uploadSessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResources': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/refresh': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResource-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResources`
 *
 * A reference to a resource associated with an access package catalog.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResources',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}`
 *
 * A reference to a resource associated with an access package catalog.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}',
    paramDefs: {
      path: ['accessPackageResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}',
    paramDefs: {
      path: ['accessPackageResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageResources`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageResources',
    body,
  };
}

export const accessPackageResourceEnvironment = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment`
   *
   * Contains the environment information for the resource. This environment can be set using either the @odata.bind annotation or the environment&#x27;s originId. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceEnvironment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResource-id'],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/refresh`
   *
   * In Microsoft Entra entitlement management, refresh the accessPackageResource object to fetch the latest details for displayName, description, and resourceType from the origin system. For the AadApplication originSystem, this operation also updates the displayName and description for the accessPackageResourceRole.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/refresh',
      paramDefs: {
        path: ['accessPackageResource-id'],
      },
      params,
    };
  },
};
