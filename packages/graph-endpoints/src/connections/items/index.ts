export * as activities from './activities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/items/{externalItem-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/items': Operation<
    '/connections/{externalConnection-id}/items',
    'get'
  >;
  'GET /connections/{externalConnection-id}/items/{externalItem-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}',
    'get'
  >;
  'POST /connections/{externalConnection-id}/items': Operation<
    '/connections/{externalConnection-id}/items',
    'post'
  >;
  'PUT /connections/{externalConnection-id}/items/{externalItem-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}',
    'put'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/items/{externalItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/items`
 *
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/items']['response']> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/items',
    paramDefs: {
      path: ['externalConnection-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/items/{externalItem-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /connections/{externalConnection-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/items']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /connections/{externalConnection-id}/items']['response']> {
  return {
    method: 'post',
    path: '/connections/{externalConnection-id}/items',
    paramDefs: {
      path: ['externalConnection-id'],
    },
    params,
    body,
  };
}

/**
 * `PUT /connections/{externalConnection-id}/items/{externalItem-id}`
 *
 */
export function set(
  body: IEndpoints['PUT /connections/{externalConnection-id}/items/{externalItem-id}']['body'],
  params?: IEndpoints['PUT /connections/{externalConnection-id}/items/{externalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PUT /connections/{externalConnection-id}/items/{externalItem-id}']['response']
> {
  return {
    method: 'put',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
    body,
  };
}
