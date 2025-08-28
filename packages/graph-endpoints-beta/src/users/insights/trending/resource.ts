import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/insights/trending/{trending-id}/resource': Operation<
    '/users/{user-id}/insights/trending/{trending-id}/resource',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/insights/trending/{trending-id}/resource`
 *
 * Used for navigating to the trending document.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/trending/{trending-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'trending-id', in: 'path' },
    ],
    params,
  };
}
