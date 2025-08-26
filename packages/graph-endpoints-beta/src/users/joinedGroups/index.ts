export * as evaluateDynamicMembership from './evaluateDynamicMembership';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedGroups': Operation<'/users/{user-id}/joinedGroups', 'get'>;
}

/**
 * `GET /users/{user-id}/joinedGroups`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedGroups']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/joinedGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
