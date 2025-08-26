import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items',
    'get'
  >;
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}',
    'get'
  >;
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items`
 *
 * Get the mailboxItem collection within a specified mailboxFolder in a mailbox.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items',
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
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}`
 *
 * Read the properties and relationships of a mailboxItem object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailbox-id', in: 'path' },
      { name: 'mailboxFolder-id', in: 'path' },
      { name: 'mailboxItem-id', in: 'path' },
    ],
    params,
  };
}
