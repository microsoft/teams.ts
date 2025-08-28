import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/group/serviceProvisioningErrors': Operation<
    '/teams/{team-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/group/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/group/serviceProvisioningErrors']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/group/serviceProvisioningErrors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/group/serviceProvisioningErrors',
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
    ],
    params,
  };
}
