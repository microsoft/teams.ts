import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    'delete'
  >;
  'GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
    'get'
  >;
  'GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    'get'
  >;
  'PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    'patch'
  >;
  'POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues': Operation<
    '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
    'post'
  >;
}

/**
 * `DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'customSecurityAttributeDefinition-id', in: 'path' },
      { name: 'allowedValue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues`
 *
 * Get a list of the allowedValue objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customSecurityAttributeDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}`
 *
 * Read the properties and relationships of an allowedValue object.
 */
export function get(
  params?: IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customSecurityAttributeDefinition-id', in: 'path' },
      { name: 'allowedValue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}`
 *
 * Update the properties of an allowedValue object.
 */
export function update(
  body: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['body'],
  params?: IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}',
    paramDefs: [
      { name: 'customSecurityAttributeDefinition-id', in: 'path' },
      { name: 'allowedValue-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues`
 *
 * Create a new allowedValue object.
 */
export function create(
  body: IEndpoints['POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['body'],
  params?: IEndpoints['POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues',
    paramDefs: [{ name: 'customSecurityAttributeDefinition-id', in: 'path' }],
    params,
    body,
  };
}
