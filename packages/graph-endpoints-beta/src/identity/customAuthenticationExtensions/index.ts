export * as validateAuthenticationConfiguration from './validateAuthenticationConfiguration';

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
    ver: 'beta',
    method: 'delete',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'customAuthenticationExtension-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/identity/customAuthenticationExtensions',
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
    ver: 'beta',
    method: 'get',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customAuthenticationExtension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['body'],
  params?: IEndpoints['PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}',
    paramDefs: [{ name: 'customAuthenticationExtension-id', in: 'path' }],
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
  body: IEndpoints['POST /identity/customAuthenticationExtensions']['body'],
  params?: IEndpoints['POST /identity/customAuthenticationExtensions']['parameters']
): EndpointRequest<IEndpoints['POST /identity/customAuthenticationExtensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/customAuthenticationExtensions',
    paramDefs: [],
    params,
    body,
  };
}
