export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles/{accessPackageResourceRole-id}',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id', 'accessPackageResourceRole-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}/scope/resource/roles',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
