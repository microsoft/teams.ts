import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/serviceProvisioningErrors': Operation<'/me/serviceProvisioningErrors', 'get'>;
}

/**
 * `GET /me/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /me/serviceProvisioningErrors']['parameters']
): EndpointRequest<IEndpoints['GET /me/serviceProvisioningErrors']['response']> {
  return {
    method: 'get',
    path: '/me/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
