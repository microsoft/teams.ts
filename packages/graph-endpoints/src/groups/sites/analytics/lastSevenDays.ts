import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics/lastSevenDays',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics/lastSevenDays']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics/lastSevenDays',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
