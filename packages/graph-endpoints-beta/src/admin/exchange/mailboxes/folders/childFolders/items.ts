import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items',
    'get'
  >;
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}',
    'get'
  >;
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items`
 *
 * The collection of items in this folder.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailbox-id', in: 'path' },
      { name: 'mailboxFolder-id', in: 'path' },
      { name: 'mailboxFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}`
 *
 * The collection of items in this folder.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailbox-id', in: 'path' },
      { name: 'mailboxFolder-id', in: 'path' },
      { name: 'mailboxFolder-id1', in: 'path' },
      { name: 'mailboxItem-id', in: 'path' },
    ],
    params,
  };
}
