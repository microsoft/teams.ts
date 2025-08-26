export * as groups from './groups';
export * as items from './items';
export * as operations from './operations';
export * as quota from './quota';
export * as schema from './schema';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}': Operation<
    '/connections/{externalConnection-id}',
    'delete'
  >;
  'GET /connections': Operation<'/connections', 'get'>;
  'GET /connections/{externalConnection-id}': Operation<
    '/connections/{externalConnection-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}': Operation<
    '/connections/{externalConnection-id}',
    'patch'
  >;
  'POST /connections': Operation<'/connections', 'post'>;
}

/**
 * `DELETE /connections/{externalConnection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /connections/{externalConnection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/connections/{externalConnection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /connections`
 *
 */
export function list(
  params?: IEndpoints['GET /connections']['parameters']
): EndpointRequest<IEndpoints['GET /connections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/connections',
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
 * `GET /connections/{externalConnection-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/connections/{externalConnection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /connections/{externalConnection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/connections/{externalConnection-id}',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /connections`
 *
 */
export function create(
  body: IEndpoints['POST /connections']['body'],
  params?: IEndpoints['POST /connections']['parameters']
): EndpointRequest<IEndpoints['POST /connections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/connections',
    paramDefs: [],
    params,
    body,
  };
}
