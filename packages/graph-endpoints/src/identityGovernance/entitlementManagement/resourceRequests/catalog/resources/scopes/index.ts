export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes': Operation<
    '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageResourceRequest-id',
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes',
    paramDefs: {
      path: ['accessPackageResourceRequest-id', 'accessPackageResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackageResourceRequest-id',
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackageResourceRequest-id',
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest-id}/catalog/resources/{accessPackageResource-id}/scopes',
    paramDefs: {
      path: ['accessPackageResourceRequest-id', 'accessPackageResource-id'],
    },
    params,
    body,
  };
}
