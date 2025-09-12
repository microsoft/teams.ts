import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/informationProtection/bitlocker': Operation<
    '/me/informationProtection/bitlocker',
    'get'
  >;
  'GET /me/informationProtection/bitlocker/recoveryKeys': Operation<
    '/me/informationProtection/bitlocker/recoveryKeys',
    'get'
  >;
  'GET /me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}': Operation<
    '/me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    'get'
  >;
}

/**
 * `GET /me/informationProtection/bitlocker`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/bitlocker']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection/bitlocker']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/bitlocker',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const recoveryKeys = {
  /**
   * `GET /me/informationProtection/bitlocker/recoveryKeys`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  list: function list(
    params?: IEndpoints['GET /me/informationProtection/bitlocker/recoveryKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/informationProtection/bitlocker/recoveryKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/informationProtection/bitlocker/recoveryKeys',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  get: function get(
    params?: IEndpoints['GET /me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bitlockerRecoveryKey-id'],
      },
      params,
    };
  },
};
