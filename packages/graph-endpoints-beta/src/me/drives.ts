import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/drives': Operation<'/me/drives', 'get'>;
  'GET /me/drives/{drive-id}': Operation<'/me/drives/{drive-id}', 'get'>;
}

/**
 * `GET /me/drives`
 *
 * Retrieve the list of drive resources available for a target user, group, or site.
 */
export function list(
  params?: IEndpoints['GET /me/drives']['parameters']
): EndpointRequest<IEndpoints['GET /me/drives']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/drives',
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
 * `GET /me/drives/{drive-id}`
 *
 * A collection of drives available for this user. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/drives/{drive-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/drives/{drive-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}
