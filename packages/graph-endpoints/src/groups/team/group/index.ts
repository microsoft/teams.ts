import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/group': Operation<'/groups/{group-id}/team/group', 'get'>;
  'GET /groups/{group-id}/team/group/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/team/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/group`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/group']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/group']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/group',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /groups/{group-id}/team/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/group/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};
