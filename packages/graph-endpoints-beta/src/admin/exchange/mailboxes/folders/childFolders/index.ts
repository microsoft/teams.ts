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
    paramDefs: {
      path: ['mailbox-id', 'mailboxFolder-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['mailbox-id', 'mailboxFolder-id', 'mailboxFolder-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const items = {
  /**
   * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items`
   *
   * The collection of items in this folder.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mailbox-id', 'mailboxFolder-id', 'mailboxFolder-id1'],
      },
      params,
    };
  },
  /**
   * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}`
   *
   * The collection of items in this folder.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/childFolders/{mailboxFolder-id1}/items/{mailboxItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailbox-id', 'mailboxFolder-id', 'mailboxFolder-id1', 'mailboxItem-id'],
      },
      params,
    };
  },
};
