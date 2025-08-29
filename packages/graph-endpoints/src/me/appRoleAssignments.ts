import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/me/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'GET /me/appRoleAssignments': Operation<'/me/appRoleAssignments', 'get'>;
  'GET /me/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/me/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /me/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/me/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'POST /me/appRoleAssignments': Operation<'/me/appRoleAssignments', 'post'>;
}

/**
 * `DELETE /me/appRoleAssignments/{appRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/appRoleAssignments/{appRoleAssignment-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appRoleAssignments`
 *
 * Represents the app roles a user is granted for an application. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /me/appRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /me/appRoleAssignments']['response']> {
  return {
    method: 'get',
    path: '/me/appRoleAssignments',
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
 * `GET /me/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Represents the app roles a user is granted for an application. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /me/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/appRoleAssignments/{appRoleAssignment-id}']['response']> {
  return {
    method: 'get',
    path: '/me/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/appRoleAssignments/{appRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/appRoleAssignments/{appRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /me/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/appRoleAssignments/{appRoleAssignment-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [{ name: 'appRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/appRoleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /me/appRoleAssignments']['body']
): EndpointRequest<IEndpoints['POST /me/appRoleAssignments']['response']> {
  return {
    method: 'post',
    path: '/me/appRoleAssignments',
    body,
  };
}
