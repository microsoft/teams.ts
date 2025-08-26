import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'delete'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'get'
  >;
  'GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'get'
  >;
  'PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'patch'
  >;
  'POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'post'
  >;
}

/**
 * `DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
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
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['body'],
  params?: IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    paramDefs: [
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['body'],
  params?: IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    paramDefs: [
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
    body,
  };
}
