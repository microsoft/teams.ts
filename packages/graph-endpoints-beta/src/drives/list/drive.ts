import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/drive': Operation<'/drives/{drive-id}/list/drive', 'get'>;
}

/**
 * `GET /drives/{drive-id}/list/drive`
 *
 * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/drive']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/drive']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}
