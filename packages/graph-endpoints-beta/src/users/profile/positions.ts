import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/positions/{workPosition-id}': Operation<
    '/users/{user-id}/profile/positions/{workPosition-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/positions': Operation<'/users/{user-id}/profile/positions', 'get'>;
  'GET /users/{user-id}/profile/positions/{workPosition-id}': Operation<
    '/users/{user-id}/profile/positions/{workPosition-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/positions/{workPosition-id}': Operation<
    '/users/{user-id}/profile/positions/{workPosition-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/positions': Operation<
    '/users/{user-id}/profile/positions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/positions/{workPosition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/positions/{workPosition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/positions/{workPosition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/positions/{workPosition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'workPosition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/positions`
 *
 * Represents detailed information about work positions associated with a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/positions']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/positions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/positions',
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
 * `GET /users/{user-id}/profile/positions/{workPosition-id}`
 *
 * Represents detailed information about work positions associated with a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/positions/{workPosition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/positions/{workPosition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/positions/{workPosition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'workPosition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/positions/{workPosition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/positions/{workPosition-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/positions/{workPosition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/positions/{workPosition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/positions/{workPosition-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'workPosition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/positions`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/positions']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/positions']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/positions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/positions',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
