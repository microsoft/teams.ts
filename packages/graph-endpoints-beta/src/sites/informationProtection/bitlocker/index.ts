export * as recoveryKeys from './recoveryKeys';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/informationProtection/bitlocker': Operation<
    '/sites/{site-id}/informationProtection/bitlocker',
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
