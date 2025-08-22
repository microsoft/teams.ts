export * as content from './content';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/root': Operation<'/drives/{drive-id}/root', 'get'>;
}

/**
 * `GET /drives/{drive-id}/root`
 *
 * The root folder of the drive. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/root']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/root']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/root',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}
