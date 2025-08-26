export * as recoveryKeys from './recoveryKeys';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection/bitlocker': Operation<'/informationProtection/bitlocker', 'get'>;
}

/**
 * `GET /informationProtection/bitlocker`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection/bitlocker']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/bitlocker']['response']> {
  return {
    method: 'get',
    path: '/informationProtection/bitlocker',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
