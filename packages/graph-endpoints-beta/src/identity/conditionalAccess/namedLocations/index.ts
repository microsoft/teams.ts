import type { EndpointRequest, Operation } from './../../../types/common.ts';

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
  'POST /identity/conditionalAccess/namedLocations/{namedLocation-id}/restore': Operation<
    '/identity/conditionalAccess/namedLocations/{namedLocation-id}/restore',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}`
 *
 * Delete a countryNamedLocation object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['namedLocation-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/namedLocations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/namedLocations/{namedLocation-id}`
 *
 * Read the properties and relationships of a compliantNetworkNamedLocation object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/namedLocations/{namedLocation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    paramDefs: {
      path: ['namedLocation-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}',
    paramDefs: {
      path: ['namedLocation-id'],
    },
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
  body: IEndpoints['POST /identity/conditionalAccess/namedLocations']['body']
): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/namedLocations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/namedLocations',
    body,
  };
}

export const restore = {
  /**
   * `POST /identity/conditionalAccess/namedLocations/{namedLocation-id}/restore`
   *
   * Restore a deleted countryNamedLocation object.
   */
  create: function create(
    params?: IEndpoints['POST /identity/conditionalAccess/namedLocations/{namedLocation-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/namedLocations/{namedLocation-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/namedLocations/{namedLocation-id}/restore',
      paramDefs: {
        path: ['namedLocation-id'],
      },
      params,
    };
  },
};
