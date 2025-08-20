import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/phones/{itemPhone-id}': Operation<
    '/users/{user-id}/profile/phones/{itemPhone-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/phones': Operation<'/users/{user-id}/profile/phones', 'get'>;
  'GET /users/{user-id}/profile/phones/{itemPhone-id}': Operation<
    '/users/{user-id}/profile/phones/{itemPhone-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/phones/{itemPhone-id}': Operation<
    '/users/{user-id}/profile/phones/{itemPhone-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/phones': Operation<'/users/{user-id}/profile/phones', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/phones/{itemPhone-id}`
 *
 * Delete an itemPhone object from the user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/phones/{itemPhone-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/phones/{itemPhone-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/phones/{itemPhone-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'itemPhone-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/phones`
 *
 * Represents detailed information about phone numbers associated with a user in various services.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/phones']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/phones']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/phones',
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
 * `GET /users/{user-id}/profile/phones/{itemPhone-id}`
 *
 * Represents detailed information about phone numbers associated with a user in various services.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/phones/{itemPhone-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/phones/{itemPhone-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/phones/{itemPhone-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'itemPhone-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/phones/{itemPhone-id}`
 *
 * Update the properties of an itemPhone object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/phones/{itemPhone-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/phones/{itemPhone-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/profile/phones/{itemPhone-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/phones/{itemPhone-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'itemPhone-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/phones`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/phones']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/phones']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/phones']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/phones',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
