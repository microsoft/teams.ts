export * as content from './content';
export * as contentStream from './contentStream';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/following': Operation<'/drives/{drive-id}/following', 'get'>;
  'GET /drives/{drive-id}/following/{driveItem-id}': Operation<
    '/drives/{drive-id}/following/{driveItem-id}',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/following`
 *
 * The list of items the user is following. Only in OneDrive for Business.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/following']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/following']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/following',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/following/{driveItem-id}`
 *
 * The list of items the user is following. Only in OneDrive for Business.
 */
export function get$1(
  params?: IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/following/{driveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/following/{driveItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}
