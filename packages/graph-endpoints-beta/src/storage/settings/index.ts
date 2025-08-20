export * as quota from './quota';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/settings': Operation<'/storage/settings', 'delete'>;
  'GET /storage/settings': Operation<'/storage/settings', 'get'>;
  'PATCH /storage/settings': Operation<'/storage/settings', 'patch'>;
}

/**
 * `DELETE /storage/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /storage/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/settings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /storage/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /storage/settings']['parameters']
): EndpointRequest<IEndpoints['GET /storage/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/settings']['body'],
  params?: IEndpoints['PATCH /storage/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /storage/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/settings',
    paramDefs: [],
    params,
    body,
  };
}
