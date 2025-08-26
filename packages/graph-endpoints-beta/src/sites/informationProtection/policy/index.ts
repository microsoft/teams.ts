export * as labels from './labels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/policy': Operation<
    '/sites/{site-id}/informationProtection/policy',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/policy': Operation<
    '/sites/{site-id}/informationProtection/policy',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/policy': Operation<
    '/sites/{site-id}/informationProtection/policy',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/policy',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/policy']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/policy',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
