import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    'delete'
  >;
  'GET /messageRecipients/{messageRecipient-id}/events': Operation<
    '/messageRecipients/{messageRecipient-id}/events',
    'get'
  >;
  'GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    'get'
  >;
  'PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    'patch'
  >;
  'POST /messageRecipients/{messageRecipient-id}/events': Operation<
    '/messageRecipients/{messageRecipient-id}/events',
    'post'
  >;
}

/**
 * `DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageRecipient-id', in: 'path' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /messageRecipients/{messageRecipient-id}/events`
 *
 */
export function list(
  params?: IEndpoints['GET /messageRecipients/{messageRecipient-id}/events']['parameters']
): EndpointRequest<IEndpoints['GET /messageRecipients/{messageRecipient-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageRecipients/{messageRecipient-id}/events',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageRecipient-id', in: 'path' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['body'],
  params?: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    paramDefs: [
      { name: 'messageRecipient-id', in: 'path' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /messageRecipients/{messageRecipient-id}/events`
 *
 */
export function create(
  body: IEndpoints['POST /messageRecipients/{messageRecipient-id}/events']['body'],
  params?: IEndpoints['POST /messageRecipients/{messageRecipient-id}/events']['parameters']
): EndpointRequest<IEndpoints['POST /messageRecipients/{messageRecipient-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageRecipients/{messageRecipient-id}/events',
    paramDefs: [{ name: 'messageRecipient-id', in: 'path' }],
    params,
    body,
  };
}
