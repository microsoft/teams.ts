import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/group': Operation<'/teams/{team-id}/group', 'get'>;
  'GET /teams/{team-id}/group/serviceProvisioningErrors': Operation<
    '/teams/{team-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/group`
 *
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/group']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/group',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /teams/{team-id}/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/group/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
};
