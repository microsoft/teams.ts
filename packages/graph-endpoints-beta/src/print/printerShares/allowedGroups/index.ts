import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/allowedGroups': Operation<
    '/print/printerShares/{printerShare-id}/allowedGroups',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/allowedGroups`
 *
 * The groups whose users have access to print using the printer.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/allowedGroups',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printerShares/{printerShare-id}/allowedGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['printerShare-id', 'group-id'],
      },
      params,
    };
  },
};
