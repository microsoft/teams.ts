import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/shares/{printerShare-id}/allowedGroups': Operation<
    '/print/shares/{printerShare-id}/allowedGroups',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/print/shares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /print/shares/{printerShare-id}/allowedGroups`
 *
 * Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/allowedGroups']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}/allowedGroups']['response']> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/allowedGroups',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /print/shares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /print/shares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/shares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/print/shares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['printerShare-id', 'group-id'],
      },
      params,
    };
  },
};
