export * as content from './content';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/special': Operation<'/drives/{drive-id}/special', 'get'>;
  'GET /drives/{drive-id}/special/{driveItem-id}': Operation<
    '/drives/{drive-id}/special/{driveItem-id}',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/special`
 *
 * Collection of common folders available in OneDrive. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/special']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/special']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/special',
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
 * `GET /drives/{drive-id}/special/{driveItem-id}`
 *
 * Collection of common folders available in OneDrive. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/special/{driveItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/special/{driveItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}
