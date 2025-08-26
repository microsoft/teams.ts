import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsUserConfiguration-id', in: 'path' },
    ],
    params,
  };
}
