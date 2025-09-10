import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/inboundFlows/{inboundFlow-id}': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}',
    'delete'
  >;
  'GET /external/industryData/inboundFlows': Operation<
    '/external/industryData/inboundFlows',
    'get'
  >;
  'GET /external/industryData/inboundFlows/{inboundFlow-id}': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}',
    'get'
  >;
  'PATCH /external/industryData/inboundFlows/{inboundFlow-id}': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}',
    'patch'
  >;
  'POST /external/industryData/inboundFlows': Operation<
    '/external/industryData/inboundFlows',
    'post'
  >;
  'GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}/dataConnector',
    'get'
  >;
  'GET /external/industryData/inboundFlows/{inboundFlow-id}/year': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}/year',
    'get'
  >;
}

/**
 * `DELETE /external/industryData/inboundFlows/{inboundFlow-id}`
 *
 * Delete an inboundFlow object.
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/inboundFlows/{inboundFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/inboundFlows/{inboundFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['inboundFlow-id'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/inboundFlows`
 *
 * Get a list of the inboundFlow objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/inboundFlows']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/inboundFlows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/inboundFlows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/inboundFlows/{inboundFlow-id}`
 *
 * Read the properties and relationships of an inboundFlow object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}',
    paramDefs: {
      path: ['inboundFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/industryData/inboundFlows/{inboundFlow-id}`
 *
 * Update the properties of an inboundApiFlow object.
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/inboundFlows/{inboundFlow-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/inboundFlows/{inboundFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/inboundFlows/{inboundFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}',
    paramDefs: {
      path: ['inboundFlow-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/industryData/inboundFlows`
 *
 * Create a new inboundApiFlow object.
 */
export function create(
  body: IEndpoints['POST /external/industryData/inboundFlows']['body']
): EndpointRequest<IEndpoints['POST /external/industryData/inboundFlows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/inboundFlows',
    body,
  };
}

export const dataConnector = {
  /**
   * `GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector`
   *
   * The data connector to the source system from where this flow gets its data.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/inboundFlows/{inboundFlow-id}/dataConnector',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['inboundFlow-id'],
      },
      params,
    };
  },
};

export const year = {
  /**
   * `GET /external/industryData/inboundFlows/{inboundFlow-id}/year`
   *
   * The year associated to the data that this flow brings in.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/year']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/year']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/inboundFlows/{inboundFlow-id}/year',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['inboundFlow-id'],
      },
      params,
    };
  },
};
