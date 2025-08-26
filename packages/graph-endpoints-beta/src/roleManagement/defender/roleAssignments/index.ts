export * as appScopes from './appScopes';
export * as directoryScopes from './directoryScopes';
export * as principals from './principals';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}': Operation<
    '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    'delete'
  >;
  'GET /roleManagement/defender/roleAssignments': Operation<
    '/roleManagement/defender/roleAssignments',
    'get'
  >;
  'GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}': Operation<
    '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    'get'
  >;
  'PATCH /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}': Operation<
    '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    'patch'
  >;
  'POST /roleManagement/defender/roleAssignments': Operation<
    '/roleManagement/defender/roleAssignments',
    'post'
  >;
}

/**
  * `DELETE /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}`
  *
  * Delete a unifiedRoleAssignmentMultiple object of an RBAC provider.  This is applicable for a RBAC application that supports multiple principals and scopes. The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC)
  * @deprecated
  */
export function del(
  params?: IEndpoints['DELETE /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/defender/roleAssignments`
  *
  * Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /roleManagement/defender/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/defender/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}`
  *
  * Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
  * @deprecated
  */
export function get(
  params?: IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    paramDefs: [{ name: 'unifiedRoleAssignmentMultiple-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /roleManagement/defender/roleAssignments`
  *
  * Create a new unifiedRoleAssignmentMultiple object for an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /roleManagement/defender/roleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/defender/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/defender/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/defender/roleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
