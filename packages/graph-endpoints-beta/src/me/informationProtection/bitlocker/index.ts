export * as recoveryKeys from './recoveryKeys';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/informationProtection/bitlocker': Operation<
    '/me/informationProtection/bitlocker',
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
