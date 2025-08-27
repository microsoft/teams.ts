import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    'delete'
  >;
  'GET /users/{user-id}/communications/callSettings/delegates': Operation<
    '/users/{user-id}/communications/callSettings/delegates',
    'get'
  >;
  'GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    'get'
  >;
  'PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    'patch'
  >;
  'POST /users/{user-id}/communications/callSettings/delegates': Operation<
    '/users/{user-id}/communications/callSettings/delegates',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/communications/callSettings/delegates`
 *
 * Represents the delegate settings.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/communications/callSettings/delegates']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/communications/callSettings/delegates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/communications/callSettings/delegates',
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
 * `GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}`
 *
 * Represents the delegate settings.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/communications/callSettings/delegates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/communications/callSettings/delegates']['body'],
  params?: IEndpoints['POST /users/{user-id}/communications/callSettings/delegates']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/communications/callSettings/delegates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/communications/callSettings/delegates',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
