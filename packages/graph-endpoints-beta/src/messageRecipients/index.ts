export * as events from './events';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /messageRecipients/{messageRecipient-id}': Operation<
    '/messageRecipients/{messageRecipient-id}',
    'delete'
  >;
  'GET /messageRecipients': Operation<'/messageRecipients', 'get'>;
  'GET /messageRecipients/{messageRecipient-id}': Operation<
    '/messageRecipients/{messageRecipient-id}',
    'get'
  >;
  'PATCH /messageRecipients/{messageRecipient-id}': Operation<
    '/messageRecipients/{messageRecipient-id}',
    'patch'
  >;
  'POST /messageRecipients': Operation<'/messageRecipients', 'post'>;
}

/**
 * `DELETE /messageRecipients/{messageRecipient-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageRecipients/{messageRecipient-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /messageRecipients/{messageRecipient-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageRecipients/{messageRecipient-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /messageRecipients`
 *
 */
export function list(
  params?: IEndpoints['GET /messageRecipients']['parameters']
): EndpointRequest<IEndpoints['GET /messageRecipients']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageRecipients',
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
 * `GET /messageRecipients/{messageRecipient-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageRecipients/{messageRecipient-id}']['parameters']
): EndpointRequest<IEndpoints['GET /messageRecipients/{messageRecipient-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageRecipients/{messageRecipient-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageRecipient-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /messageRecipients/{messageRecipient-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}']['body'],
  params?: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /messageRecipients/{messageRecipient-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageRecipients/{messageRecipient-id}',
    paramDefs: [{ name: 'messageRecipient-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /messageRecipients`
 *
 */
export function create(
  body: IEndpoints['POST /messageRecipients']['body'],
  params?: IEndpoints['POST /messageRecipients']['parameters']
): EndpointRequest<IEndpoints['POST /messageRecipients']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageRecipients',
    paramDefs: [],
    params,
    body,
  };
}
