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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageTrace-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageTrace-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'messageTrace-id', in: 'path' }],
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
  body: IEndpoints['POST /admin/exchange/messageTraces']['body'],
  params?: IEndpoints['POST /admin/exchange/messageTraces']['parameters']
): EndpointRequest<IEndpoints['POST /admin/exchange/messageTraces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/messageTraces',
    paramDefs: [],
    params,
    body,
  };
}
