import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/dataConnectors/{industryDataConnector-id}': Operation<
    '/external/industryData/dataConnectors/{industryDataConnector-id}',
    'delete'
  >;
  'GET /external/industryData/dataConnectors': Operation<
    '/external/industryData/dataConnectors',
    'get'
  >;
  'GET /external/industryData/dataConnectors/{industryDataConnector-id}': Operation<
    '/external/industryData/dataConnectors/{industryDataConnector-id}',
    'get'
  >;
  'PATCH /external/industryData/dataConnectors/{industryDataConnector-id}': Operation<
    '/external/industryData/dataConnectors/{industryDataConnector-id}',
    'patch'
  >;
  'POST /external/industryData/dataConnectors': Operation<
    '/external/industryData/dataConnectors',
    'post'
  >;
  'GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem': Operation<
    '/external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem',
    'get'
  >;
}

/**
 * `DELETE /external/industryData/dataConnectors/{industryDataConnector-id}`
 *
 * Delete an industryDataConnector object.
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/dataConnectors/{industryDataConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/dataConnectors/{industryDataConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/dataConnectors/{industryDataConnector-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['industryDataConnector-id'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/dataConnectors`
 *
 * Get the industryDataConnector resources from the dataConnector navigation property.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/dataConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/dataConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/dataConnectors',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/dataConnectors/{industryDataConnector-id}`
 *
 * Read the properties and relationships of an industryDataConnector object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/dataConnectors/{industryDataConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/dataConnectors/{industryDataConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/dataConnectors/{industryDataConnector-id}',
    paramDefs: {
      path: ['industryDataConnector-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/industryData/dataConnectors/{industryDataConnector-id}`
 *
 * Update the properties of an azureDataLakeConnector object.
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/dataConnectors/{industryDataConnector-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/dataConnectors/{industryDataConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/dataConnectors/{industryDataConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/dataConnectors/{industryDataConnector-id}',
    paramDefs: {
      path: ['industryDataConnector-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/industryData/dataConnectors`
 *
 * Create a new azureDataLakeConnector object.
 */
export function create(
  body: IEndpoints['POST /external/industryData/dataConnectors']['body']
): EndpointRequest<IEndpoints['POST /external/industryData/dataConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/dataConnectors',
    body,
  };
}

export const sourceSystem = {
  /**
   * `GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem`
   *
   * The sourceSystemDefinition this connector is connected to.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['industryDataConnector-id'],
      },
      params,
    };
  },
};
