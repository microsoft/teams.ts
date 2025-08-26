import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/patents/{itemPatent-id}': Operation<
    '/users/{user-id}/profile/patents/{itemPatent-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/patents': Operation<'/users/{user-id}/profile/patents', 'get'>;
  'GET /users/{user-id}/profile/patents/{itemPatent-id}': Operation<
    '/users/{user-id}/profile/patents/{itemPatent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/patents/{itemPatent-id}': Operation<
    '/users/{user-id}/profile/patents/{itemPatent-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/patents': Operation<'/users/{user-id}/profile/patents', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/patents/{itemPatent-id}`
 *
 * Deletes an itemPatent object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/patents/{itemPatent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/patents/{itemPatent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/patents/{itemPatent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'itemPatent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/patents`
 *
 * Represents patents that a user has added to their profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/patents']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/patents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/patents',
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
 * `GET /users/{user-id}/profile/patents/{itemPatent-id}`
 *
 * Represents patents that a user has added to their profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/patents/{itemPatent-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/patents/{itemPatent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/patents/{itemPatent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'itemPatent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/patents/{itemPatent-id}`
 *
 * Update the properties of an itemPatent object.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/patents/{itemPatent-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/patents/{itemPatent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/patents/{itemPatent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/patents/{itemPatent-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'itemPatent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/patents`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/patents']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/patents']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/patents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/patents',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
