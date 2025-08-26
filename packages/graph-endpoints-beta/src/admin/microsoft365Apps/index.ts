export * as installationOptions from './installationOptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/microsoft365Apps': Operation<'/admin/microsoft365Apps', 'delete'>;
  'GET /admin/microsoft365Apps': Operation<'/admin/microsoft365Apps', 'get'>;
  'PATCH /admin/microsoft365Apps': Operation<'/admin/microsoft365Apps', 'patch'>;
}

/**
 * `DELETE /admin/microsoft365Apps`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/microsoft365Apps']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/microsoft365Apps']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/microsoft365Apps',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/microsoft365Apps`
 *
 * A container for the Microsoft 365 apps admin functionality.
 */
export function list(
  params?: IEndpoints['GET /admin/microsoft365Apps']['parameters']
): EndpointRequest<IEndpoints['GET /admin/microsoft365Apps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/microsoft365Apps',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/microsoft365Apps`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/microsoft365Apps']['body'],
  params?: IEndpoints['PATCH /admin/microsoft365Apps']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/microsoft365Apps']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/microsoft365Apps',
    paramDefs: [],
    params,
    body,
  };
}
