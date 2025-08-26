export * as responsepayload from './responsepayload';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /commands/{command-id}': Operation<'/commands/{command-id}', 'delete'>;
  'GET /commands': Operation<'/commands', 'get'>;
  'GET /commands/{command-id}': Operation<'/commands/{command-id}', 'get'>;
  'PATCH /commands/{command-id}': Operation<'/commands/{command-id}', 'patch'>;
  'POST /commands': Operation<'/commands', 'post'>;
}

/**
 * `DELETE /commands/{command-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/commands/{command-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'command-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /commands`
 *
 */
export function list(
  params?: IEndpoints['GET /commands']['parameters']
): EndpointRequest<IEndpoints['GET /commands']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/commands',
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
 * `GET /commands/{command-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['GET /commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/commands/{command-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'command-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /commands/{command-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /commands/{command-id}']['body'],
  params?: IEndpoints['PATCH /commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/commands/{command-id}',
    paramDefs: [{ name: 'command-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /commands`
 *
 */
export function create(
  body: IEndpoints['POST /commands']['body'],
  params?: IEndpoints['POST /commands']['parameters']
): EndpointRequest<IEndpoints['POST /commands']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/commands',
    paramDefs: [],
    params,
    body,
  };
}
