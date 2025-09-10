export * as labels from './labels';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/policy': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/policy',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/policy': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/policy',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/policy': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/policy',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/policy']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/policy',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/policy']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/policy',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/policy']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/policy']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/policy',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}
