export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/followedSites': Operation<'/users/{user-id}/followedSites', 'get'>;
  'GET /users/{user-id}/followedSites/{site-id}': Operation<
    '/users/{user-id}/followedSites/{site-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/followedSites`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/followedSites']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/followedSites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/followedSites',
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
 * `GET /users/{user-id}/followedSites/{site-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/followedSites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/followedSites/{site-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/followedSites/{site-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
