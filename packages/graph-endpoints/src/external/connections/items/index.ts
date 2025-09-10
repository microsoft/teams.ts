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
 * Delete an externalItem object.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
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
 * Read the properties and relationships of an externalItem object.
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items']['response']
> {
  return {
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
 * Read the properties and relationships of an externalItem object.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
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
 * Create a new externalItem object.
 */
export function set(
  body: IEndpoints['PUT /external/connections/{externalConnection-id}/items/{externalItem-id}']['body'],
  params?: IEndpoints['PUT /external/connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /external/connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    method: 'put',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
    body,
  };
}
