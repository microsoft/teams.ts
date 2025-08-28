export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/directory/transitiveRoleAssignments': Operation<
    '/roleManagement/directory/transitiveRoleAssignments',
    'get'
  >;
  'GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/directory/transitiveRoleAssignments': Operation<
    '/roleManagement/directory/transitiveRoleAssignments',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/transitiveRoleAssignments`
 *
 * Get the list of direct and transitive unifiedRoleAssignment objects for a specific principal. For example, if a user is assigned a Microsoft Entra role through group membership, the role assignment is transitive, and this request will list the group&#x27;s ID as the principalId. Results can also be filtered by the roleDefinitionId and directoryScopeId. Supported only for directory (Microsoft Entra ID) provider. For more information, see Use Microsoft Entra groups to manage role assignments.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/transitiveRoleAssignments',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/transitiveRoleAssignments`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/transitiveRoleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/directory/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/transitiveRoleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
