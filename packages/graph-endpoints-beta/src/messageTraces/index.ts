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
    paramDefs: {
      header: ['If-Match'],
      path: ['messageTrace-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['messageTrace-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['messageTrace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /messageTraces`
 *
 */
export function create(
  body: IEndpoints['POST /messageTraces']['body']
): EndpointRequest<IEndpoints['POST /messageTraces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageTraces',
    body,
  };
}
