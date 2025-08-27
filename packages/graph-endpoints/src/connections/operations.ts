import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/operations': Operation<
    '/connections/{externalConnection-id}/operations',
    'get'
  >;
  'GET /connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'patch'
  >;
  'POST /connections/{externalConnection-id}/operations': Operation<
    '/connections/{externalConnection-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'connectionOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/operations`
 *
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/operations']['response']> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/operations',
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
 * `GET /connections/{externalConnection-id}/operations/{connectionOperation-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'connectionOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'connectionOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /connections/{externalConnection-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/operations']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /connections/{externalConnection-id}/operations']['response']> {
  return {
    method: 'post',
    path: '/connections/{externalConnection-id}/operations',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
