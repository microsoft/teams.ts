export * as activities from './activities';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/items': Operation<
    '/external/connections/{externalConnection-id}/items',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    'get'
  >;
  'POST /external/connections/{externalConnection-id}/items': Operation<
    '/external/connections/{externalConnection-id}/items',
    'post'
  >;
  'PUT /external/connections/{externalConnection-id}/items/{externalItem-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    'put'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}`
 *
 * Delete an externalitem.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/items`
 *
 * Get the properties and relationships of an externalitem object. This API is provided for diagnostic purposes only. It isn&#x27;t intended to be used for any other purpose. Repeated requests to this API might result in 429 HTTP errors.
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items',
    paramDefs: {
      path: ['externalConnection-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}`
 *
 * Get the properties and relationships of an externalitem object. This API is provided for diagnostic purposes only. It isn&#x27;t intended to be used for any other purpose. Repeated requests to this API might result in 429 HTTP errors.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /external/connections/{externalConnection-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/items']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/items']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/items',
    paramDefs: {
      path: ['externalConnection-id'],
    },
    params,
    body,
  };
}

/**
 * `PUT /external/connections/{externalConnection-id}/items/{externalItem-id}`
 *
 * Create a new externalItem. This API can be used to create a custom item. The containing externalConnection must have a schema registered of the corresponding type.
 */
export function set(
  body: IEndpoints['PUT /external/connections/{externalConnection-id}/items/{externalItem-id}']['body'],
  params?: IEndpoints['PUT /external/connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /external/connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
    body,
  };
}
