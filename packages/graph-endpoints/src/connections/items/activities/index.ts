export * as performedBy from './performedBy';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'get'
  >;
  'GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'patch'
  >;
  'POST /connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
      { name: 'externalActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
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
      { name: 'externalItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
      { name: 'externalActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
      { name: 'externalActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/items/{externalItem-id}/activities']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    method: 'post',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
