import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/namedLocations': Operation<
    '/identity/conditionalAccess/namedLocations',
    'get'
  >;
  'GET /identity/conditionalAccess/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/namedLocations': Operation<
    '/identity/conditionalAccess/namedLocations',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}`
 *
 * Delete an ipNamedLocation object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'namedLocation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/namedLocations`
 *
 * Get a list of namedLocation objects.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/namedLocations']['parameters']
): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/namedLocations']['response']> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/namedLocations',
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
 * `GET /identity/conditionalAccess/namedLocations/{namedLocation-id}`
 *
 * Retrieve the properties and relationships of a countryNamedLocation object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'namedLocation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}`
 *
 * Update the properties of a countryNamedLocation object.
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    paramDefs: [{ name: 'namedLocation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/namedLocations`
 *
 * Create a new namedLocation object. Named locations can be either ipNamedLocation or countryNamedLocation objects.
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/namedLocations']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/namedLocations']['parameters']
): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/namedLocations']['response']> {
  return {
    method: 'post',
    path: '/identity/conditionalAccess/namedLocations',
    paramDefs: [],
    params,
    body,
  };
}
