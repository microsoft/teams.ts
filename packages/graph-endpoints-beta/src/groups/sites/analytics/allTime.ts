import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/analytics/allTime': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/allTime',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/allTime`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/allTime']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/allTime']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/allTime',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
