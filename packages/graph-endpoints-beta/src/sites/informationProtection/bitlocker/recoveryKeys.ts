import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
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
 * `GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys`
 *
 * The recovery keys associated with the bitlocker entity.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/bitlocker/recoveryKeys',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
 *
 * The recovery keys associated with the bitlocker entity.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'bitlockerRecoveryKey-id', in: 'path' },
    ],
    params,
  };
}
