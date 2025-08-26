import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}': Operation<
    '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    'delete'
  >;
  'GET /external/industryData/sourceSystems': Operation<
    '/external/industryData/sourceSystems',
    'get'
  >;
  'GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}': Operation<
    '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    'get'
  >;
  'PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}': Operation<
    '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    'patch'
  >;
  'POST /external/industryData/sourceSystems': Operation<
    '/external/industryData/sourceSystems',
    'post'
  >;
}

/**
 * `DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}`
 *
 * Delete a sourceSystemDefinition object.
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sourceSystemDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/sourceSystems`
 *
 * Get a list of the sourceSystemDefinition objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/sourceSystems']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/sourceSystems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/sourceSystems',
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
 * `GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}`
 *
 * Read the properties and relationships of a sourceSystemDefinition object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sourceSystemDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}`
 *
 * Update the properties of a sourceSystemDefinition object.
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/sourceSystems/{sourceSystemDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/sourceSystems/{sourceSystemDefinition-id}',
    paramDefs: [{ name: 'sourceSystemDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/sourceSystems`
 *
 * Create a new sourceSystemDefinition object.
 */
export function create(
  body: IEndpoints['POST /external/industryData/sourceSystems']['body'],
  params?: IEndpoints['POST /external/industryData/sourceSystems']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/sourceSystems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/sourceSystems',
    paramDefs: [],
    params,
    body,
  };
}
