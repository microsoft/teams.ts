import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}': Operation<
    '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    'delete'
  >;
  'GET /identity/customAuthenticationExtensions': Operation<
    '/identity/customAuthenticationExtensions',
    'get'
  >;
  'GET /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}': Operation<
    '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    'get'
  >;
  'PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}': Operation<
    '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    'patch'
  >;
  'POST /identity/customAuthenticationExtensions': Operation<
    '/identity/customAuthenticationExtensions',
    'post'
  >;
  'POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration': Operation<
    '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration',
    'post'
  >;
  'POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration': Operation<
    '/identity/customAuthenticationExtensions/validateAuthenticationConfiguration',
    'post'
  >;
}

/**
 * `DELETE /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}`
 *
 * Delete a customAuthenticationExtension object. The following derived types are currently supported.
 */
export function del(
  params?: IEndpoints['DELETE /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['customAuthenticationExtension-id'],
    },
    params,
  };
}

/**
 * `GET /identity/customAuthenticationExtensions`
 *
 * Get a list of the customAuthenticationExtension objects and their properties. The following derived types are supported.
 */
export function list(
  params?: IEndpoints['GET /identity/customAuthenticationExtensions']['parameters']
): EndpointRequest<IEndpoints['GET /identity/customAuthenticationExtensions']['response']> {
  return {
    method: 'get',
    path: '/identity/customAuthenticationExtensions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}`
 *
 * Read the properties and relationships of a customAuthenticationExtension object. The following derived types are currently supported.
 */
export function get(
  params?: IEndpoints['GET /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    paramDefs: {
      path: ['customAuthenticationExtension-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}`
 *
 * Update the properties of a customAuthenticationExtension object. The following derived types are currently supported.
 */
export function update(
  body: IEndpoints['PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['body'],
  params?: IEndpoints['PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    paramDefs: {
      path: ['customAuthenticationExtension-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/customAuthenticationExtensions`
 *
 * Create a new customAuthenticationExtension object. The following derived types are currently supported.
 */
export function create(
  body: IEndpoints['POST /identity/customAuthenticationExtensions']['body']
): EndpointRequest<IEndpoints['POST /identity/customAuthenticationExtensions']['response']> {
  return {
    method: 'post',
    path: '/identity/customAuthenticationExtensions',
    body,
  };
}

export const validateAuthenticationConfiguration = {
  /**
   * `POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration`
   *
   * An API to check validity of the endpoint and and authentication configuration for a customAuthenticationExtension object, which can represent one of the following derived types:
   */
  create: function create(
    params?: IEndpoints['POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration']['response']
  > {
    return {
      method: 'post',
      path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration',
      paramDefs: {
        path: ['customAuthenticationExtension-id'],
      },
      params,
    };
  },
  /**
   * `POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration`
   *
   */
  create$1: function create$1(
    body: IEndpoints['POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration']['body']
  ): EndpointRequest<
    IEndpoints['POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration']['response']
  > {
    return {
      method: 'post',
      path: '/identity/customAuthenticationExtensions/validateAuthenticationConfiguration',
      body,
    };
  },
};
