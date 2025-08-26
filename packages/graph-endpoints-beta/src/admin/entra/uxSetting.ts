import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/entra/uxSetting': Operation<'/admin/entra/uxSetting', 'delete'>;
  'GET /admin/entra/uxSetting': Operation<'/admin/entra/uxSetting', 'get'>;
  'PATCH /admin/entra/uxSetting': Operation<'/admin/entra/uxSetting', 'patch'>;
}

/**
 * `DELETE /admin/entra/uxSetting`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/entra/uxSetting']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/entra/uxSetting']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/entra/uxSetting',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/entra/uxSetting`
 *
 * Get the properties and relationships of a uxSetting object.
 */
export function get(
  params?: IEndpoints['GET /admin/entra/uxSetting']['parameters']
): EndpointRequest<IEndpoints['GET /admin/entra/uxSetting']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/entra/uxSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/entra/uxSetting`
 *
 * Update the properties of a uxSetting object.
 */
export function update(
  body: IEndpoints['PATCH /admin/entra/uxSetting']['body'],
  params?: IEndpoints['PATCH /admin/entra/uxSetting']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/entra/uxSetting']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/entra/uxSetting',
    paramDefs: [],
    params,
    body,
  };
}
