import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/group/serviceProvisioningErrors': Operation<
    '/me/joinedTeams/{team-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /me/joinedTeams/{team-id}/group/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/group/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/group/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/group/serviceProvisioningErrors',
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
