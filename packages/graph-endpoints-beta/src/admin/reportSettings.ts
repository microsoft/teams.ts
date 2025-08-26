import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/reportSettings': Operation<'/admin/reportSettings', 'delete'>;
  'GET /admin/reportSettings': Operation<'/admin/reportSettings', 'get'>;
  'PATCH /admin/reportSettings': Operation<'/admin/reportSettings', 'patch'>;
}

/**
 * `DELETE /admin/reportSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/reportSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/reportSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/reportSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/reportSettings`
 *
 * Get the tenant-level settings for Microsoft 365 reports.
 */
export function list(
  params?: IEndpoints['GET /admin/reportSettings']['parameters']
): EndpointRequest<IEndpoints['GET /admin/reportSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/reportSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/reportSettings`
 *
 * Update tenant-level settings for Microsoft 365 reports.
 */
export function update(
  body: IEndpoints['PATCH /admin/reportSettings']['body'],
  params?: IEndpoints['PATCH /admin/reportSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/reportSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/reportSettings',
    paramDefs: [],
    params,
    body,
  };
}
