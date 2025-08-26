export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/exchange/roleAssignments': Operation<
    '/roleManagement/exchange/roleAssignments',
    'get'
  >;
  'GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/exchange/roleAssignments': Operation<
    '/roleManagement/exchange/roleAssignments',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * Delete a unifiedRoleAssignment object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/exchange/roleAssignments`
  *
  * Get a list of unifiedRoleAssignment objects for the provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra entitlement management)
- Exchange Online
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /roleManagement/exchange/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/exchange/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/roleAssignments',
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
 * `GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * Retrieve the properties and relationships of a unifiedRoleAssignment object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/exchange/roleAssignments`
 *
 * Create a new unifiedRoleAssignment object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/exchange/roleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/exchange/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/exchange/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/roleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
