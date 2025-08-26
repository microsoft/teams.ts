import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors': Operation<
    '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles/{engagementRole-id}/members/{engagementRoleMember-id}/user/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
  };
}
