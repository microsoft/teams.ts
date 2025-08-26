export * as labels from './labels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/policy': Operation<
    '/me/informationProtection/policy',
    'delete'
  >;
  'GET /me/informationProtection/policy': Operation<'/me/informationProtection/policy', 'get'>;
  'PATCH /me/informationProtection/policy': Operation<'/me/informationProtection/policy', 'patch'>;
}

/**
 * `DELETE /me/informationProtection/policy`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/policy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/informationProtection/policy`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection/policy`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/policy']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/policy',
    paramDefs: [],
    params,
    body,
  };
}
