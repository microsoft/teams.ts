export * as masterCategories from './masterCategories';
export * as taskFolders from './taskFolders';
export * as taskGroups from './taskGroups';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/outlook': Operation<'/me/outlook', 'get'>;
}

/**
 * `GET /me/outlook`
 *
 * Selective Outlook services available to the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/outlook']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
