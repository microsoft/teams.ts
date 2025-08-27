export * as webinars from './webinars';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/virtualEvents': Operation<'/me/virtualEvents', 'delete'>;
  'GET /me/virtualEvents': Operation<'/me/virtualEvents', 'get'>;
  'PATCH /me/virtualEvents': Operation<'/me/virtualEvents', 'patch'>;
}

/**
 * `DELETE /me/virtualEvents`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/virtualEvents',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/virtualEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /me/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['GET /me/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/virtualEvents',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/virtualEvents`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/virtualEvents']['body'],
  params?: IEndpoints['PATCH /me/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/virtualEvents',
    paramDefs: [],
    params,
    body,
  };
}
