export * as recipients from './recipients';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /messageTraces/{messageTrace-id}': Operation<
    '/messageTraces/{messageTrace-id}',
    'delete'
  >;
  'GET /messageTraces': Operation<'/messageTraces', 'get'>;
  'GET /messageTraces/{messageTrace-id}': Operation<'/messageTraces/{messageTrace-id}', 'get'>;
  'PATCH /messageTraces/{messageTrace-id}': Operation<'/messageTraces/{messageTrace-id}', 'patch'>;
  'POST /messageTraces': Operation<'/messageTraces', 'post'>;
}

/**
 * `DELETE /messageTraces/{messageTrace-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageTraces/{messageTrace-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /messageTraces/{messageTrace-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageTraces/{messageTrace-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageTrace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /messageTraces`
 *
 */
export function list(
  params?: IEndpoints['GET /messageTraces']['parameters']
): EndpointRequest<IEndpoints['GET /messageTraces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageTraces',
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
 * `GET /messageTraces/{messageTrace-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageTraces/{messageTrace-id}']['parameters']
): EndpointRequest<IEndpoints['GET /messageTraces/{messageTrace-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageTraces/{messageTrace-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageTrace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /messageTraces/{messageTrace-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageTraces/{messageTrace-id}']['body'],
  params?: IEndpoints['PATCH /messageTraces/{messageTrace-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /messageTraces/{messageTrace-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageTraces/{messageTrace-id}',
    paramDefs: [{ name: 'messageTrace-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /messageTraces`
 *
 */
export function create(
  body: IEndpoints['POST /messageTraces']['body'],
  params?: IEndpoints['POST /messageTraces']['parameters']
): EndpointRequest<IEndpoints['POST /messageTraces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageTraces',
    paramDefs: [],
    params,
    body,
  };
}
