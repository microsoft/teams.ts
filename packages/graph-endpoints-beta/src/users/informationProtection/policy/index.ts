export * as labels from './labels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/policy': Operation<
    '/users/{user-id}/informationProtection/policy',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/policy': Operation<
    '/users/{user-id}/informationProtection/policy',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/policy': Operation<
    '/users/{user-id}/informationProtection/policy',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/policy',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/policy',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/policy`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/policy']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/policy']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/informationProtection/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/policy',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}
