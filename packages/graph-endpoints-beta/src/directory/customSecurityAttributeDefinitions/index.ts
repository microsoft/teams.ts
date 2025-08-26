export * as allowedValues from './allowedValues';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    'delete'
  >;
  'GET /directory/customSecurityAttributeDefinitions': Operation<
    '/directory/customSecurityAttributeDefinitions',
    'get'
  >;
  'GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    'get'
  >;
  'PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    'patch'
  >;
  'POST /directory/customSecurityAttributeDefinitions': Operation<
    '/directory/customSecurityAttributeDefinitions',
    'post'
  >;
}

/**
 * `DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'customSecurityAttributeDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/customSecurityAttributeDefinitions`
 *
 * Get a list of the customSecurityAttributeDefinition objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /directory/customSecurityAttributeDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/customSecurityAttributeDefinitions',
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
 * `GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}`
 *
 * Read the properties and relationships of a customSecurityAttributeDefinition object.
 */
export function get(
  params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customSecurityAttributeDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}`
 *
 * Update the properties of a customSecurityAttributeDefinition object.
 */
export function update(
  body: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['body'],
  params?: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}',
    paramDefs: [{ name: 'customSecurityAttributeDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/customSecurityAttributeDefinitions`
 *
 * Create a new customSecurityAttributeDefinition object.
 */
export function create(
  body: IEndpoints['POST /directory/customSecurityAttributeDefinitions']['body'],
  params?: IEndpoints['POST /directory/customSecurityAttributeDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /directory/customSecurityAttributeDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/customSecurityAttributeDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
