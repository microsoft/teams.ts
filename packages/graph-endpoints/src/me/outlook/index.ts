export * as masterCategories from './masterCategories';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/outlook': Operation<'/me/outlook', 'get'>;
}

/**
 * `GET /me/outlook`
 *
 */
export function get(
  params?: IEndpoints['GET /me/outlook']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook']['response']> {
  return {
    method: 'get',
    path: '/me/outlook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
