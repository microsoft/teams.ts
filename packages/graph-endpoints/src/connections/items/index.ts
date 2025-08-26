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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
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
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
