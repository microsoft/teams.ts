export * as masterCategories from './masterCategories';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/outlook': Operation<'/users/{user-id}/outlook', 'get'>;
}

/**
 * `GET /users/{user-id}/outlook`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/outlook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
