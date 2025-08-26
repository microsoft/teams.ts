export * as childFolders from './childFolders';
export * as items from './items';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders',
    'get'
  >;
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}',
    'get'
  >;
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders`
 *
 * Get all the mailboxFolder objects in the specified mailbox, including any search folders.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders']['parameters']
): EndpointRequest<IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders',
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
    ],
    params,
  };
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}`
 *
 * Read the properties and relationships of a mailboxFolder object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailbox-id', in: 'path' },
      { name: 'mailboxFolder-id', in: 'path' },
    ],
    params,
  };
}
