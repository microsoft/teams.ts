export * as roles from './roles';
export * as scopes from './scopes';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resources': Operation<
    '/identityGovernance/entitlementManagement/resources',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/resources': Operation<
    '/identityGovernance/entitlementManagement/resources',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/environment': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/environment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/refresh': Operation<
    '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResource-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resources`
 *
 * The resources associated with the catalogs.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resources']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resources',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}`
 *
 * The resources associated with the catalogs.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}',
    paramDefs: {
      path: ['accessPackageResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}',
    paramDefs: {
      path: ['accessPackageResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/resources`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/resources']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/resources']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/resources',
    body,
  };
}

export const environment = {
  /**
   * `GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/environment`
   *
   * Contains the environment information for the resource. This can be set using either the @odata.bind annotation or the environment&#x27;s originId.Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/environment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/environment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/environment',
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
   * `POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/refresh']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/resources/{accessPackageResource-id}/refresh',
      paramDefs: {
        path: ['accessPackageResource-id'],
      },
      params,
    };
  },
};
