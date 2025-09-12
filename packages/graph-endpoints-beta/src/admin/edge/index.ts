export * as internetExplorerMode from './internetExplorerMode';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/edge': Operation<'/admin/edge', 'delete'>;
  'GET /admin/edge': Operation<'/admin/edge', 'get'>;
  'PATCH /admin/edge': Operation<'/admin/edge', 'patch'>;
}

/**
 * `DELETE /admin/edge`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/edge']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/edge']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/edge',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/edge`
 *
 * A container for Microsoft Edge resources. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/edge']['parameters']
): EndpointRequest<IEndpoints['GET /admin/edge']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/edge',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/edge`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/edge']['body']
): EndpointRequest<IEndpoints['PATCH /admin/edge']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/edge',
    body,
  };
}
