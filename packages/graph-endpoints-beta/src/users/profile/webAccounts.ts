import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}': Operation<
    '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/webAccounts': Operation<
    '/users/{user-id}/profile/webAccounts',
    'get'
  >;
  'GET /users/{user-id}/profile/webAccounts/{webAccount-id}': Operation<
    '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}': Operation<
    '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/webAccounts': Operation<
    '/users/{user-id}/profile/webAccounts',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'webAccount-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/webAccounts`
 *
 * Represents web accounts the user has indicated they use or has added to their user profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/webAccounts']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/webAccounts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/webAccounts',
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
 * `GET /users/{user-id}/profile/webAccounts/{webAccount-id}`
 *
 * Represents web accounts the user has indicated they use or has added to their user profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/webAccounts/{webAccount-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/webAccounts/{webAccount-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'webAccount-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'webAccount-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/webAccounts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/webAccounts']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/webAccounts']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/webAccounts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/webAccounts',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
