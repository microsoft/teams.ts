export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageResource-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes',
    paramDefs: {
      path: ['accessPackageResource-id', 'accessPackageResourceRole-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackageResource-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: [
        'accessPackageResource-id',
        'accessPackageResourceRole-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource-id}/accessPackageResourceRoles/{accessPackageResourceRole-id}/accessPackageResource/accessPackageResourceScopes',
    paramDefs: {
      path: ['accessPackageResource-id', 'accessPackageResourceRole-id'],
    },
    params,
    body,
  };
}
