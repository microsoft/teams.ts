export * as labels from './labels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/policy': Operation<'/informationProtection/policy', 'delete'>;
  'GET /informationProtection/policy': Operation<'/informationProtection/policy', 'get'>;
  'PATCH /informationProtection/policy': Operation<'/informationProtection/policy', 'patch'>;
}

/**
 * `DELETE /informationProtection/policy`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['DELETE /informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/policy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /informationProtection/policy`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /informationProtection/policy`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/policy']['body'],
  params?: IEndpoints['PATCH /informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['PATCH /informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/policy',
    paramDefs: [],
    params,
    body,
  };
}
