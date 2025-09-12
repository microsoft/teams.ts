export * as recipients from './recipients';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/exchange/messageTraces/{messageTrace-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}',
    'delete'
  >;
  'GET /admin/exchange/messageTraces': Operation<'/admin/exchange/messageTraces', 'get'>;
  'GET /admin/exchange/messageTraces/{messageTrace-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}',
    'get'
  >;
  'PATCH /admin/exchange/messageTraces/{messageTrace-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}',
    'patch'
  >;
  'POST /admin/exchange/messageTraces': Operation<'/admin/exchange/messageTraces', 'post'>;
}

/**
 * `DELETE /admin/exchange/messageTraces/{messageTrace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/exchange/messageTraces/{messageTrace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['messageTrace-id'],
    },
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/messageTraces']['parameters']
): EndpointRequest<IEndpoints['GET /admin/exchange/messageTraces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}']['parameters']
): EndpointRequest<IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}',
    paramDefs: {
      path: ['messageTrace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/exchange/messageTraces/{messageTrace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}']['body'],
  params?: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange/messageTraces/{messageTrace-id}',
    paramDefs: {
      path: ['messageTrace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/exchange/messageTraces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/messageTraces']['body']
): EndpointRequest<IEndpoints['POST /admin/exchange/messageTraces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/messageTraces',
    body,
  };
}
