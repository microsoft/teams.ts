export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user',
    'get'
  >;
}

/**
 * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user`
 *
 * Represents the user associated with the network traffic, providing details about the individual or account initiating the transaction.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'networkAccessTraffic-transactionId', in: 'path' },
    ],
    params,
  };
}
