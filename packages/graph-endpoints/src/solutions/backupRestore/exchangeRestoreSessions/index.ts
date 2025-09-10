export * as granularMailboxRestoreArtifacts from './granularMailboxRestoreArtifacts';
export * as mailboxRestoreArtifacts from './mailboxRestoreArtifacts';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/exchangeRestoreSessions': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions',
    'post'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests',
    'get'
  >;
  'POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests',
    'post'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['exchangeRestoreSession-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions`
 *
 * The list of Exchange restore sessions available in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}`
 *
 * The list of Exchange restore sessions available in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
    paramDefs: {
      path: ['exchangeRestoreSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}`
 *
 * Update the properties of an exchangeRestoreSession.
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
    paramDefs: {
      path: ['exchangeRestoreSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/exchangeRestoreSessions`
 *
 * Create a new exchangeRestoreSession object.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['body']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/exchangeRestoreSessions',
    body,
  };
}

export const mailboxRestoreArtifactsBulkAdditionRequests = {
  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests`
   *
   * Get a list of the maiboxRestoreArtifactsBulkAdditionRequest objects associated with an exchangeRestoreSession. The mailboxes property is deliberately omitted from the response body in order to limit the response size.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['exchangeRestoreSession-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests`
   *
   * Create a new mailboxRestoreArtifactsBulkAdditionRequest object associated with an exchangeRestoreSession. The following steps describe how to create and manage an exchangeRestoreSession with bulk artifact additions:
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['body'],
    params?: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests',
      paramDefs: {
        path: ['exchangeRestoreSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}`
   *
   * Get a mailboxRestoreArtifactsBulkAdditionRequest object by its id, associated with an exchangeRestoreSession.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifactsBulkAdditionRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifactsBulkAdditionRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}`
   *
   * Delete a mailboxRestoreArtifactsBulkAdditionRequest object associated with an exchangeRestoreSession.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifactsBulkAdditionRequest-id'],
      },
      params,
    };
  },
};
