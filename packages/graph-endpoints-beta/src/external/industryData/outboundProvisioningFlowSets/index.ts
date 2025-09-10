import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    'delete'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets': Operation<
    '/external/industryData/outboundProvisioningFlowSets',
    'get'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    'get'
  >;
  'PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    'patch'
  >;
  'POST /external/industryData/outboundProvisioningFlowSets': Operation<
    '/external/industryData/outboundProvisioningFlowSets',
    'post'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
    'get'
  >;
  'POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
    'post'
  >;
  'GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    'get'
  >;
  'PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    'patch'
  >;
  'DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}': Operation<
    '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
    'delete'
  >;
}

/**
 * `DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['outboundProvisioningFlowSet-id'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/outboundProvisioningFlowSets`
 *
 * Get a list of the outboundProvisioningFlowSet objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/outboundProvisioningFlowSets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/outboundProvisioningFlowSets',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    paramDefs: {
      path: ['outboundProvisioningFlowSet-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}',
    paramDefs: {
      path: ['outboundProvisioningFlowSet-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/industryData/outboundProvisioningFlowSets`
 *
 */
export function create(
  body: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets']['body']
): EndpointRequest<
  IEndpoints['POST /external/industryData/outboundProvisioningFlowSets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/outboundProvisioningFlowSets',
    body,
  };
}

export const provisioningFlows = {
  /**
   * `GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows`
   *
   * Get a list of the provisioningFlow objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['outboundProvisioningFlowSet-id'],
      },
      params,
    };
  },
  /**
   * `POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows`
   *
   */
  create: function create(
    body: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['body'],
    params?: IEndpoints['POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows',
      paramDefs: {
        path: ['outboundProvisioningFlowSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}`
   *
   * A flow that provisions relevant records of a given entity type in the Microsoft 365 tenant.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['outboundProvisioningFlowSet-id', 'provisioningFlow-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['body'],
    params?: IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
      paramDefs: {
        path: ['outboundProvisioningFlowSet-id', 'provisioningFlow-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet-id}/provisioningFlows/{provisioningFlow-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['outboundProvisioningFlowSet-id', 'provisioningFlow-id'],
      },
      params,
    };
  },
};
