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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/edge`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/edge']['body'],
  params?: IEndpoints['PATCH /admin/edge']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/edge']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/edge',
    paramDefs: [],
    params,
    body,
  };
}
