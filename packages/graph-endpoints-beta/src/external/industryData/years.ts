import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/years/{yearTimePeriodDefinition-id}': Operation<
    '/external/industryData/years/{yearTimePeriodDefinition-id}',
    'delete'
  >;
  'GET /external/industryData/years': Operation<'/external/industryData/years', 'get'>;
  'GET /external/industryData/years/{yearTimePeriodDefinition-id}': Operation<
    '/external/industryData/years/{yearTimePeriodDefinition-id}',
    'get'
  >;
  'PATCH /external/industryData/years/{yearTimePeriodDefinition-id}': Operation<
    '/external/industryData/years/{yearTimePeriodDefinition-id}',
    'patch'
  >;
  'POST /external/industryData/years': Operation<'/external/industryData/years', 'post'>;
}

/**
 * `DELETE /external/industryData/years/{yearTimePeriodDefinition-id}`
 *
 * Delete a yearTimePeriodDefinition object.
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/years/{yearTimePeriodDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/years/{yearTimePeriodDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/years/{yearTimePeriodDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'yearTimePeriodDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/years`
 *
 * Get a list of the yearTimePeriodDefinition objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/years']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/years']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/years',
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
 * `GET /external/industryData/years/{yearTimePeriodDefinition-id}`
 *
 * Read the properties and relationships of a yearTimePeriodDefinition object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/years/{yearTimePeriodDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/years/{yearTimePeriodDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/years/{yearTimePeriodDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'yearTimePeriodDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/years/{yearTimePeriodDefinition-id}`
 *
 * Update the properties of a yearTimePeriodDefinition object.
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/years/{yearTimePeriodDefinition-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/years/{yearTimePeriodDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/years/{yearTimePeriodDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/years/{yearTimePeriodDefinition-id}',
    paramDefs: [{ name: 'yearTimePeriodDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/years`
 *
 * Create a new yearTimePeriodDefinition object.
 */
export function create(
  body: IEndpoints['POST /external/industryData/years']['body'],
  params?: IEndpoints['POST /external/industryData/years']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/years']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/years',
    paramDefs: [],
    params,
    body,
  };
}
