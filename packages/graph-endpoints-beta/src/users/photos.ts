import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/photos': Operation<'/users/{user-id}/photos', 'get'>;
  'GET /users/{user-id}/photos/{profilePhoto-id}': Operation<
    '/users/{user-id}/photos/{profilePhoto-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/photos`
 *
 * The collection of the user&#x27;s profile photos in different sizes. Read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/photos']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/photos']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/photos',
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
 * `GET /users/{user-id}/photos/{profilePhoto-id}`
 *
 * The collection of the user&#x27;s profile photos in different sizes. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/photos/{profilePhoto-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/photos/{profilePhoto-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/photos/{profilePhoto-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'profilePhoto-id', in: 'path' },
    ],
    params,
  };
}
