import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors': Operation<
    '/teams/{team-id}/owners/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/owners/{user-id}/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/owners/{user-id}/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
