import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/informationProtection/bitlocker': Operation<
    '/users/{user-id}/informationProtection/bitlocker',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys': Operation<
    '/users/{user-id}/informationProtection/bitlocker/recoveryKeys',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}': Operation<
    '/users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/informationProtection/bitlocker`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/bitlocker']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/informationProtection/bitlocker']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/bitlocker',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const recoveryKeys = {
  /**
   * `GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/informationProtection/bitlocker/recoveryKeys',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'bitlockerRecoveryKey-id'],
      },
      params,
    };
  },
};
