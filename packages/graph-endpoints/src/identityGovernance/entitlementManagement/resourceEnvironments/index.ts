export * as resources from './resources';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceEnvironments': Operation<
    '/identityGovernance/entitlementManagement/resourceEnvironments',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/resourceEnvironments': Operation<
    '/identityGovernance/entitlementManagement/resourceEnvironments',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceEnvironment-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceEnvironments`
 *
 * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceEnvironments']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceEnvironments']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceEnvironments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}`
 *
 * A reference to the geolocation environments in which a resource is located.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}',
    paramDefs: {
      path: ['accessPackageResourceEnvironment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment-id}',
    paramDefs: {
      path: ['accessPackageResourceEnvironment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/resourceEnvironments`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceEnvironments']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/resourceEnvironments']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/resourceEnvironments',
    body,
  };
}
