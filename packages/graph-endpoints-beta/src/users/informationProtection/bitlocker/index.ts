export * as recoveryKeys from './recoveryKeys';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/informationProtection/bitlocker': Operation<
    '/users/{user-id}/informationProtection/bitlocker',
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
