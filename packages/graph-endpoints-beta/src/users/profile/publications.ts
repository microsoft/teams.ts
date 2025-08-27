import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/publications/{itemPublication-id}': Operation<
    '/users/{user-id}/profile/publications/{itemPublication-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/publications': Operation<
    '/users/{user-id}/profile/publications',
    'get'
  >;
  'GET /users/{user-id}/profile/publications/{itemPublication-id}': Operation<
    '/users/{user-id}/profile/publications/{itemPublication-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/publications/{itemPublication-id}': Operation<
    '/users/{user-id}/profile/publications/{itemPublication-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/publications': Operation<
    '/users/{user-id}/profile/publications',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/publications/{itemPublication-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/publications/{itemPublication-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/publications/{itemPublication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/publications/{itemPublication-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'itemPublication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/publications`
 *
 * Represents details of any publications a user has added to their profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/publications']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/publications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/publications',
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
 * `GET /users/{user-id}/profile/publications/{itemPublication-id}`
 *
 * Represents details of any publications a user has added to their profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/publications/{itemPublication-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/publications/{itemPublication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/publications/{itemPublication-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'itemPublication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/publications/{itemPublication-id}`
 *
 * Update the properties of an itemPublication object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/publications/{itemPublication-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/publications/{itemPublication-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/publications/{itemPublication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/publications/{itemPublication-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'itemPublication-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/publications`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/publications']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/publications']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/publications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/publications',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
