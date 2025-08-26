import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}': Operation<
    '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    'delete'
  >;
  'GET /external/industryData/referenceDefinitions': Operation<
    '/external/industryData/referenceDefinitions',
    'get'
  >;
  'GET /external/industryData/referenceDefinitions/{referenceDefinition-id}': Operation<
    '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    'get'
  >;
  'PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}': Operation<
    '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    'patch'
  >;
  'POST /external/industryData/referenceDefinitions': Operation<
    '/external/industryData/referenceDefinitions',
    'post'
  >;
}

/**
 * `DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/referenceDefinitions/{referenceDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'referenceDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/referenceDefinitions`
 *
 * Get a list of the referenceDefinition objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/referenceDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/referenceDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/referenceDefinitions',
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
 * `GET /external/industryData/referenceDefinitions/{referenceDefinition-id}`
 *
 * Read the properties and relationships of a referenceDefinition object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/referenceDefinitions/{referenceDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/referenceDefinitions/{referenceDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'referenceDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/referenceDefinitions/{referenceDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/referenceDefinitions/{referenceDefinition-id}',
    paramDefs: [{ name: 'referenceDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/referenceDefinitions`
 *
 * Create a new referenceDefinition object. referenceDefinition objects associate incoming data with standardized reference types values for validation. You can extend the following reference types with other codes that better align with your source data.
 */
export function create(
  body: IEndpoints['POST /external/industryData/referenceDefinitions']['body'],
  params?: IEndpoints['POST /external/industryData/referenceDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/referenceDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/referenceDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
