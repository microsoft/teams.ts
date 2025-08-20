import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/insights/trending/{trending-id}/resource': Operation<
    '/me/insights/trending/{trending-id}/resource',
    'get'
  >;
}

/**
 * `GET /me/insights/trending/{trending-id}/resource`
 *
 * Used for navigating to the trending document.
 */
export function get(
  params?: IEndpoints['GET /me/insights/trending/{trending-id}/resource']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights/trending/{trending-id}/resource']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights/trending/{trending-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'trending-id', in: 'path' },
    ],
    params,
  };
}
