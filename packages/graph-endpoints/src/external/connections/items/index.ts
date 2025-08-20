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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `PUT /external/connections/{externalConnection-id}/items/{externalItem-id}`
 *
 * Update the properties of an externalItem object.
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
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
