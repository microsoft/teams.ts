import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/analytics/allTime': Operation<'/sites/{site-id}/analytics/allTime', 'get'>;
}

/**
 * `GET /sites/{site-id}/analytics/allTime`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/analytics/allTime']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics/allTime']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/analytics/allTime',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
