import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod': Operation<
    '/me/insights/shared/{sharedInsight-id}/lastSharedMethod',
    'get'
  >;
}

/**
 * `GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod`
 *
 */
export function get(
  params?: IEndpoints['GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/insights/shared/{sharedInsight-id}/lastSharedMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights/shared/{sharedInsight-id}/lastSharedMethod',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}
