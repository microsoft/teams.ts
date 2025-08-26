export * as evaluateDynamicMembership from './evaluateDynamicMembership';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedGroups': Operation<'/me/joinedGroups', 'get'>;
}

/**
 * `GET /me/joinedGroups`
 *
 */
export function list(
  params?: IEndpoints['GET /me/joinedGroups']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/joinedGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
