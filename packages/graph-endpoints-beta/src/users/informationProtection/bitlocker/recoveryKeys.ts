import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
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
 * `GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys`
 *
 * The recovery keys associated with the bitlocker entity.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/bitlocker/recoveryKeys',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
 *
 * The recovery keys associated with the bitlocker entity.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'bitlockerRecoveryKey-id', in: 'path' },
    ],
    params,
  };
}
