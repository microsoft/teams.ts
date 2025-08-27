export * as masterCategories from './masterCategories';
export * as taskFolders from './taskFolders';
export * as taskGroups from './taskGroups';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/outlook': Operation<'/users/{user-id}/outlook', 'get'>;
}

/**
 * `GET /users/{user-id}/outlook`
 *
 * Selective Outlook services available to the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook']['response']> {
  return {
    ver: 'beta',
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
