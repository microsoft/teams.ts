import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/analytics/lastSevenDays': Operation<
    '/sites/{site-id}/analytics/lastSevenDays',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/analytics/lastSevenDays`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/analytics/lastSevenDays']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics/lastSevenDays']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/analytics/lastSevenDays',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
