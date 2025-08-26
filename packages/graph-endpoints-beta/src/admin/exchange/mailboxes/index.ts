export * as createImportSession from './createImportSession';
export * as exportItems from './exportItems';
export * as folders from './folders';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/exchange/mailboxes/{mailbox-id}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}',
    'delete'
  >;
  'GET /admin/exchange/mailboxes': Operation<'/admin/exchange/mailboxes', 'get'>;
  'GET /admin/exchange/mailboxes/{mailbox-id}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}',
    'get'
  >;
  'PATCH /admin/exchange/mailboxes/{mailbox-id}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}',
    'patch'
  >;
  'POST /admin/exchange/mailboxes': Operation<'/admin/exchange/mailboxes', 'post'>;
}

/**
 * `DELETE /admin/exchange/mailboxes/{mailbox-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /admin/exchange/mailboxes/{mailbox-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/exchange/mailboxes/{mailbox-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/exchange/mailboxes/{mailbox-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailbox-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/mailboxes`
 *
 * Represents a user&#x27;s mailboxes.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/mailboxes']['parameters']
): EndpointRequest<IEndpoints['GET /admin/exchange/mailboxes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes',
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
 * `GET /admin/exchange/mailboxes/{mailbox-id}`
 *
 * Represents a user&#x27;s mailboxes.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}']['parameters']
): EndpointRequest<IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailbox-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/exchange/mailboxes/{mailbox-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange/mailboxes/{mailbox-id}']['body'],
  params?: IEndpoints['PATCH /admin/exchange/mailboxes/{mailbox-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/exchange/mailboxes/{mailbox-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange/mailboxes/{mailbox-id}',
    paramDefs: [{ name: 'mailbox-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/exchange/mailboxes`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /admin/exchange/mailboxes']['body'],
  params?: IEndpoints['POST /admin/exchange/mailboxes']['parameters']
): EndpointRequest<IEndpoints['POST /admin/exchange/mailboxes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/mailboxes',
    paramDefs: [],
    params,
    body,
  };
}
