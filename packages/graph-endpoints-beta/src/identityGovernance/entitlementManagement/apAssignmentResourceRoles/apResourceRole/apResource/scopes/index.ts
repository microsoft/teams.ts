export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    paramDefs: {
      path: ['accessPackageAssignmentResourceRole-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes/{accessPackageResourceScope-id}',
    paramDefs: {
      path: ['accessPackageAssignmentResourceRole-id', 'accessPackageResourceScope-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole-id}/accessPackageResourceRole/accessPackageResource/accessPackageResourceScopes',
    paramDefs: {
      path: ['accessPackageAssignmentResourceRole-id'],
    },
    params,
    body,
  };
}
