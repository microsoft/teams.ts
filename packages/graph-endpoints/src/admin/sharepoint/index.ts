export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/sharepoint': Operation<'/admin/sharepoint', 'delete'>;
  'GET /admin/sharepoint': Operation<'/admin/sharepoint', 'get'>;
  'PATCH /admin/sharepoint': Operation<'/admin/sharepoint', 'patch'>;
}

/**
 * `DELETE /admin/sharepoint`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/sharepoint']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/sharepoint']['response']> {
  return {
    method: 'delete',
    path: '/admin/sharepoint',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/sharepoint`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/sharepoint']['parameters']
): EndpointRequest<IEndpoints['GET /admin/sharepoint']['response']> {
  return {
    method: 'get',
    path: '/admin/sharepoint',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/sharepoint`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/sharepoint']['body'],
  params?: IEndpoints['PATCH /admin/sharepoint']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/sharepoint']['response']> {
  return {
    method: 'patch',
    path: '/admin/sharepoint',
    paramDefs: [],
    params,
    body,
  };
}
