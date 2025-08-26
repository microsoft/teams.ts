export * as steps from './steps';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/approvals/{approval-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}',
    'delete'
  >;
  'GET /users/{user-id}/approvals': Operation<'/users/{user-id}/approvals', 'get'>;
  'GET /users/{user-id}/approvals/{approval-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}',
    'get'
  >;
  'PATCH /users/{user-id}/approvals/{approval-id}': Operation<
    '/users/{user-id}/approvals/{approval-id}',
    'patch'
  >;
  'POST /users/{user-id}/approvals': Operation<'/users/{user-id}/approvals', 'post'>;
}

/**
 * `DELETE /users/{user-id}/approvals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/approvals/{approval-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/approvals`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/approvals']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/approvals',
    paramDefs: [
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
 * `GET /users/{user-id}/approvals/{approval-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/approvals/{approval-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/approvals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/approvals/{approval-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/approvals`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/approvals']['body'],
  params?: IEndpoints['POST /users/{user-id}/approvals']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/approvals',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
