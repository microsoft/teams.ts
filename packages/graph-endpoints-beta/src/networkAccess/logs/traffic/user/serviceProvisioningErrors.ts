import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'networkAccessTraffic-transactionId', in: 'path' },
    ],
    params,
  };
}
