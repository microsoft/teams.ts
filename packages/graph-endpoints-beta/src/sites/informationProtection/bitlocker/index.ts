import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/informationProtection/bitlocker': Operation<
    '/sites/{site-id}/informationProtection/bitlocker',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys': Operation<
    '/sites/{site-id}/informationProtection/bitlocker/recoveryKeys',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}': Operation<
    '/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/informationProtection/bitlocker`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/bitlocker',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const recoveryKeys = {
  /**
   * `GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/bitlocker/recoveryKeys',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'bitlockerRecoveryKey-id'],
      },
      params,
    };
  },
};
