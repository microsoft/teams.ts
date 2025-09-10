import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/bitlocker',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/bitlocker',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const recoveryKeys = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
   *
   * The recovery keys associated with the bitlocker entity.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'bitlockerRecoveryKey-id'],
      },
      params,
    };
  },
};
