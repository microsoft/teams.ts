export * as uxSetting from './uxSetting';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/entra': Operation<'/admin/entra', 'delete'>;
  'GET /admin/entra': Operation<'/admin/entra', 'get'>;
  'PATCH /admin/entra': Operation<'/admin/entra', 'patch'>;
}

/**
 * `DELETE /admin/entra`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/entra']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/entra']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/entra',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/entra`
 *
 * A container for Microsoft Entra resources. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/entra']['parameters']
): EndpointRequest<IEndpoints['GET /admin/entra']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/entra',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/entra`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/entra']['body'],
  params?: IEndpoints['PATCH /admin/entra']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/entra']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/entra',
    paramDefs: [],
    params,
    body,
  };
}
