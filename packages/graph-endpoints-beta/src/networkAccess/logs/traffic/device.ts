import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device',
    'get'
  >;
}

/**
 * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device`
 *
 * Represents the device associated with the network traffic, providing details about the hardware or virtual machine involved in the transaction.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'networkAccessTraffic-transactionId', in: 'path' },
    ],
    params,
  };
}
