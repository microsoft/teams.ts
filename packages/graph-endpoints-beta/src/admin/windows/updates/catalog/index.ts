export * as entries from './entries';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/catalog': Operation<'/admin/windows/updates/catalog', 'delete'>;
  'GET /admin/windows/updates/catalog': Operation<'/admin/windows/updates/catalog', 'get'>;
  'PATCH /admin/windows/updates/catalog': Operation<'/admin/windows/updates/catalog', 'patch'>;
}

/**
 * `DELETE /admin/windows/updates/catalog`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/catalog']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows/updates/catalog']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/catalog',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/windows/updates/catalog`
 *
 * Catalog of content that can be approved for deployment by Windows Autopatch. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/catalog']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/catalog']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/catalog',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/catalog`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/catalog']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/catalog']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/windows/updates/catalog']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/catalog',
    paramDefs: [],
    params,
    body,
  };
}
