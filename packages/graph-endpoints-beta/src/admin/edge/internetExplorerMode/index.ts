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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/edge/internetExplorerMode`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/edge/internetExplorerMode']['body']
): EndpointRequest<IEndpoints['PATCH /admin/edge/internetExplorerMode']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/edge/internetExplorerMode',
    body,
  };
}
