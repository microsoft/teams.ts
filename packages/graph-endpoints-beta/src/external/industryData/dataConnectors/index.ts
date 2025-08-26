export * as sourceSystem from './sourceSystem';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'industryDataConnector-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'industryDataConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/dataConnectors/{industryDataConnector-id}`
 *
 * Update the properties of a oneRosterApiDataConnector object.
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
    paramDefs: [{ name: 'industryDataConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/dataConnectors`
 *
 * Create a new oneRosterApiDataConnector object.
 */
export function create(
  body: IEndpoints['POST /external/industryData/dataConnectors']['body'],
  params?: IEndpoints['POST /external/industryData/dataConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/dataConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/dataConnectors',
    paramDefs: [],
    params,
    body,
  };
}
