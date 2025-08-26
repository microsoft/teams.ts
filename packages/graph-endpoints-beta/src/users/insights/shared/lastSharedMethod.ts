import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}
