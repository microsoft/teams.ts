export * as services from './services';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/settings/quota': Operation<'/storage/settings/quota', 'delete'>;
  'GET /storage/settings/quota': Operation<'/storage/settings/quota', 'get'>;
  'PATCH /storage/settings/quota': Operation<'/storage/settings/quota', 'patch'>;
}

/**
 * `DELETE /storage/settings/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/settings/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /storage/settings/quota']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/settings/quota',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /storage/settings/quota`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/settings/quota']['parameters']
): EndpointRequest<IEndpoints['GET /storage/settings/quota']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/settings/quota',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/settings/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/settings/quota']['body'],
  params?: IEndpoints['PATCH /storage/settings/quota']['parameters']
): EndpointRequest<IEndpoints['PATCH /storage/settings/quota']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/settings/quota',
    paramDefs: [],
    params,
    body,
  };
}
