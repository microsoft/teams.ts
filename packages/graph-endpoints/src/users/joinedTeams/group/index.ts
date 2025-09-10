import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/group': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/group',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/group/serviceProvisioningErrors': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/group`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/group']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/group',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/group/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
};
