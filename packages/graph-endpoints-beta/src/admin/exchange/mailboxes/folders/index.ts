export * as childFolders from './childFolders';

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
    paramDefs: {
      path: ['mailbox-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['mailbox-id', 'mailboxFolder-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const items = {
  /**
   * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items`
   *
   * Get the mailboxItem collection within a specified mailboxFolder in a mailbox.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mailbox-id', 'mailboxFolder-id'],
      },
      params,
    };
  },
  /**
   * `GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}`
   *
   * Read the properties and relationships of a mailboxItem object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/exchange/mailboxes/{mailbox-id}/folders/{mailboxFolder-id}/items/{mailboxItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailbox-id', 'mailboxFolder-id', 'mailboxItem-id'],
      },
      params,
    };
  },
};
