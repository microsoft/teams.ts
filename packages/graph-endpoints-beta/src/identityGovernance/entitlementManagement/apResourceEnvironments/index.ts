import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResourceEnvironments': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources/{accessPackageResource-id}',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceEnvironment-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments`
 *
 * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}`
 *
 * Read the properties and relationships of an accessPackageResourceEnvironment object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}',
    paramDefs: {
      path: ['accessPackageResourceEnvironment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}',
    paramDefs: {
      path: ['accessPackageResourceEnvironment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageResourceEnvironments`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceEnvironments']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResourceEnvironments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments',
    body,
  };
}

export const accessPackageResources = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources`
   *
   * Read-only. Required.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageResourceEnvironment-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources/{accessPackageResource-id}`
   *
   * Read-only. Required.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources/{accessPackageResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources/{accessPackageResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageResourceEnvironments/{accessPackageResourceEnvironment-id}/accessPackageResources/{accessPackageResource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageResourceEnvironment-id', 'accessPackageResource-id'],
      },
      params,
    };
  },
};
