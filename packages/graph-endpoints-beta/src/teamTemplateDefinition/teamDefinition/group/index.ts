import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group/serviceProvisioningErrors': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group`
 *
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['teamTemplateDefinition-id'],
      },
      params,
    };
  },
};
