export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/followedSites': Operation<'/me/followedSites', 'get'>;
  'GET /me/followedSites/{site-id}': Operation<'/me/followedSites/{site-id}', 'get'>;
}

/**
 * `GET /me/followedSites`
 *
 * List the sites that have been followed by the signed in user.
 */
export function list(
  params?: IEndpoints['GET /me/followedSites']['parameters']
): EndpointRequest<IEndpoints['GET /me/followedSites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/followedSites',
    paramDefs: [
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
 * `GET /me/followedSites/{site-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/followedSites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/followedSites/{site-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/followedSites/{site-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
