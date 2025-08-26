export * as events from './events';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'delete'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    'get'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'get'
  >;
  'PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    'patch'
  >;
  'POST /admin/exchange/messageTraces/{messageTrace-id}/recipients': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    'post'
  >;
}

/**
 * `DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageTrace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['body'],
  params?: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}',
    paramDefs: [
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/exchange/messageTraces/{messageTrace-id}/recipients`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients']['body'],
  params?: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients',
    paramDefs: [{ name: 'messageTrace-id', in: 'path' }],
    params,
    body,
  };
}
