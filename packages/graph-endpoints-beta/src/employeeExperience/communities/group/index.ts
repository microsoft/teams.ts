import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/communities/{community-id}/group': Operation<
    '/employeeExperience/communities/{community-id}/group',
    'get'
  >;
  'GET /employeeExperience/communities/{community-id}/group/serviceProvisioningErrors': Operation<
    '/employeeExperience/communities/{community-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /employeeExperience/communities/{community-id}/group`
 *
 * The Microsoft 365 group that manages the membership of this community.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/group']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/group']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/group',
    paramDefs: {
      path: ['community-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /employeeExperience/communities/{community-id}/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/communities/{community-id}/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/communities/{community-id}/group/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/employeeExperience/communities/{community-id}/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['community-id'],
      },
      params,
    };
  },
};
