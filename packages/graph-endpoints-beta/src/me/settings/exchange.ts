import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/settings/exchange': Operation<'/me/settings/exchange', 'get'>;
}

/**
 * `GET /me/settings/exchange`
 *
 * The Exchange settings for mailbox discovery.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/settings/exchange']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/exchange',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
