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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/informationProtection/policy`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/policy']['body']
): EndpointRequest<IEndpoints['PATCH /me/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/policy',
    body,
  };
}
