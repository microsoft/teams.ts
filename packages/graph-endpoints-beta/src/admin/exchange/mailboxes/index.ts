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
  'POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/createImportSession',
    'post'
  >;
  'POST /admin/exchange/mailboxes/{mailbox-id}/exportItems': Operation<
    '/admin/exchange/mailboxes/{mailbox-id}/exportItems',
    'post'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['mailbox-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['mailbox-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['mailbox-id'],
    },
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
  body: IEndpoints['POST /admin/exchange/mailboxes']['body']
): EndpointRequest<IEndpoints['POST /admin/exchange/mailboxes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/exchange/mailboxes',
    body,
  };
}

export const createImportSession = {
  /**
   * `POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession`
   *
   * Create a session to import an Exchange mailbox item that was exported using the exportItems API.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/createImportSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/exchange/mailboxes/{mailbox-id}/createImportSession',
      paramDefs: {
        path: ['mailbox-id'],
      },
      params,
    };
  },
};

export const exportItems = {
  /**
   * `POST /admin/exchange/mailboxes/{mailbox-id}/exportItems`
   *
   * Export Exchange mailboxItem objects in full fidelity. This API exports each item as an opaque stream. The data stream isn&#x27;t intended for parsing, but can be used to import an item back into an Exchange mailbox. For more information, see: Overview of the mailbox import and export APIs in Microsoft Graph (preview) You can export up to 20 items in a single export request.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/exportItems']['body'],
    params?: IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/exportItems']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/exchange/mailboxes/{mailbox-id}/exportItems']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/exchange/mailboxes/{mailbox-id}/exportItems',
      paramDefs: {
        path: ['mailbox-id'],
      },
      params,
      body,
    };
  },
};
