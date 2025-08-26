import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'delete'
  >;
  'GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'get'
  >;
  'GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'get'
  >;
  'PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
    'patch'
  >;
  'POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events': Operation<
    '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    'post'
  >;
}

/**
 * `DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
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
 * `GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
 *
 */
export function list(
  params?: IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
): EndpointRequest<
  IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
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
 * `GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
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
 * `PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['body'],
  params?: IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}',
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
 * `POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events`
 *
 */
export function create(
  body: IEndpoints['POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['body'],
  params?: IEndpoints['POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['parameters']
): EndpointRequest<
  IEndpoints['POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events',
    paramDefs: [
      { name: 'messageTrace-id', in: 'path' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
    body,
  };
}
