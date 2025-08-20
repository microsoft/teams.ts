export * as confirmCompromised from './confirmCompromised';
export * as confirmSafe from './confirmSafe';
export * as dismiss from './dismiss';
export * as history from './history';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /riskyUsers/{riskyUser-id}': Operation<'/riskyUsers/{riskyUser-id}', 'delete'>;
  'GET /riskyUsers': Operation<'/riskyUsers', 'get'>;
  'GET /riskyUsers/{riskyUser-id}': Operation<'/riskyUsers/{riskyUser-id}', 'get'>;
  'PATCH /riskyUsers/{riskyUser-id}': Operation<'/riskyUsers/{riskyUser-id}', 'patch'>;
  'POST /riskyUsers': Operation<'/riskyUsers', 'post'>;
}

/**
 * `DELETE /riskyUsers/{riskyUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/riskyUsers/{riskyUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskyUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /riskyUsers`
 *
 * Retrieve the properties and relationships of a collection of riskyUser objects.
 */
export function list(
  params?: IEndpoints['GET /riskyUsers']['parameters']
): EndpointRequest<IEndpoints['GET /riskyUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskyUsers',
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
 * `GET /riskyUsers/{riskyUser-id}`
 *
 * Retrieve the properties and relationships of a riskyUser object.
 */
export function get(
  params?: IEndpoints['GET /riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskyUsers/{riskyUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /riskyUsers/{riskyUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /riskyUsers/{riskyUser-id}']['body'],
  params?: IEndpoints['PATCH /riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/riskyUsers/{riskyUser-id}',
    paramDefs: [{ name: 'riskyUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /riskyUsers`
 *
 */
export function create(
  body: IEndpoints['POST /riskyUsers']['body'],
  params?: IEndpoints['POST /riskyUsers']['parameters']
): EndpointRequest<IEndpoints['POST /riskyUsers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskyUsers',
    paramDefs: [],
    params,
    body,
  };
}
