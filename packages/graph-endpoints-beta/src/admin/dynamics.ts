import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/dynamics': Operation<'/admin/dynamics', 'delete'>;
  'GET /admin/dynamics': Operation<'/admin/dynamics', 'get'>;
  'PATCH /admin/dynamics': Operation<'/admin/dynamics', 'patch'>;
}

/**
 * `DELETE /admin/dynamics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/dynamics']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/dynamics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/dynamics',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/dynamics`
 *
 * Read the properties and relationships of a adminDynamics object.
 */
export function list(
  params?: IEndpoints['GET /admin/dynamics']['parameters']
): EndpointRequest<IEndpoints['GET /admin/dynamics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/dynamics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/dynamics`
 *
 * Update the properties of a adminDynamics object.
 */
export function update(
  body: IEndpoints['PATCH /admin/dynamics']['body'],
  params?: IEndpoints['PATCH /admin/dynamics']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/dynamics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/dynamics',
    paramDefs: [],
    params,
    body,
  };
}
