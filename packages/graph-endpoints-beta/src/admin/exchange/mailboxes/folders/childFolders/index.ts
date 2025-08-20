export * as items from './items';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders',
    'get'
  >;
  'GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}',
    'get'
  >;
}

/**
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders`
 *
 * Get the mailboxFolder collection under the specified mailboxFolder in a mailbox.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders',
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
 * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}`
 *
 * The collection of child folders in this folder.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailbox-id', in: 'path' },
      { name: 'mailboxFolder-id', in: 'path' },
      { name: 'mailboxFolder-id1', in: 'path' },
    ],
    params,
  };
}
