import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'GET /groups/{group-id}/appRoleAssignments': Operation<
    '/groups/{group-id}/appRoleAssignments',
    'get'
  >;
  'GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'POST /groups/{group-id}/appRoleAssignments': Operation<
    '/groups/{group-id}/appRoleAssignments',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Deletes an appRoleAssignment that a group has been granted.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/appRoleAssignments`
 *
 * Retrieve the list of appRoleAssignment that have been granted to a group.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/appRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/appRoleAssignments']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/appRoleAssignments',
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
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Represents the app roles granted to a group for an application. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/appRoleAssignments`
 *
 * Use this API to assign an app role to a security group. All direct members of the group will be considered assigned. Security groups with dynamic memberships are supported. To grant an app role assignment to a group, you need three identifiers: Additional licenses might be required to use a group to manage access to applications.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/appRoleAssignments']['body'],
  params?: IEndpoints['POST /groups/{group-id}/appRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/appRoleAssignments']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/appRoleAssignments',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
