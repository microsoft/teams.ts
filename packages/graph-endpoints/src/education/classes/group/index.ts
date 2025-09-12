import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/group': Operation<
    '/education/classes/{educationClass-id}/group',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/group/serviceProvisioningErrors': Operation<
    '/education/classes/{educationClass-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/group`
 *
 * The underlying Microsoft 365 group object.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/group']['response']> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/group',
    paramDefs: {
      path: ['educationClass-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /education/classes/{educationClass-id}/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/group/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};
