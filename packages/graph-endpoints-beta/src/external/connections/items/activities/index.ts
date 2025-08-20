export * as performedBy from './performedBy';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'patch'
  >;
  'POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
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
 * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
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
 * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
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
 * `PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
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
 * `POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
