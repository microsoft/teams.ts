import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/serviceProvisioningErrors': Operation<
    '/users/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/serviceProvisioningErrors']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/serviceProvisioningErrors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/serviceProvisioningErrors',
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
