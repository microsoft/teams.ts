export * as siteLists from './siteLists';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/edge/internetExplorerMode': Operation<
    '/admin/edge/internetExplorerMode',
    'delete'
  >;
  'GET /admin/edge/internetExplorerMode': Operation<'/admin/edge/internetExplorerMode', 'get'>;
  'PATCH /admin/edge/internetExplorerMode': Operation<'/admin/edge/internetExplorerMode', 'patch'>;
}

/**
 * `DELETE /admin/edge/internetExplorerMode`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/edge/internetExplorerMode']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/edge/internetExplorerMode']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/edge/internetExplorerMode',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/edge/internetExplorerMode`
 *
 * A container for Internet Explorer mode resources.
 */
export function get(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode']['parameters']
): EndpointRequest<IEndpoints['GET /admin/edge/internetExplorerMode']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/edge/internetExplorerMode',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/edge/internetExplorerMode`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/edge/internetExplorerMode']['body'],
  params?: IEndpoints['PATCH /admin/edge/internetExplorerMode']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/edge/internetExplorerMode']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/edge/internetExplorerMode',
    paramDefs: [],
    params,
    body,
  };
}
