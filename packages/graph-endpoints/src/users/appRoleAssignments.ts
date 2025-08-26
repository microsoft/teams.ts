import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'GET /users/{user-id}/appRoleAssignments': Operation<
    '/users/{user-id}/appRoleAssignments',
    'get'
  >;
  'GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'POST /users/{user-id}/appRoleAssignments': Operation<
    '/users/{user-id}/appRoleAssignments',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Delete an appRoleAssignment that has been granted to a user.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appRoleAssignments`
 *
 * Retrieve the list of appRoleAssignments that are currently granted to a user. This operation also returns app role assignments granted to groups that the user is a direct member of.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/appRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/appRoleAssignments']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/appRoleAssignments',
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
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Represents the app roles a user is granted for an application. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/appRoleAssignments`
 *
 * Assign an app role to a user, creating an appRoleAssignment object. To grant an app role assignment to a user, you need three identifiers:
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/appRoleAssignments']['body'],
  params?: IEndpoints['POST /users/{user-id}/appRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/appRoleAssignments']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/appRoleAssignments',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
