export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageAssignment-id',
        'accessPackageResourceRoleScope-id',
        'accessPackageResourceRole-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageResourceRoleScope-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    paramDefs: {
      path: [
        'accessPackageAssignment-id',
        'accessPackageResourceRoleScope-id',
        'accessPackageResourceRole-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles/{accessPackageResourceRole-id}',
    paramDefs: {
      path: [
        'accessPackageAssignment-id',
        'accessPackageResourceRoleScope-id',
        'accessPackageResourceRole-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope/accessPackageResource/accessPackageResourceRoles',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
