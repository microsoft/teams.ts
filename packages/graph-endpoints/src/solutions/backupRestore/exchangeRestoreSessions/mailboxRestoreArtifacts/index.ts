import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts',
    'post'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint',
    'get'
  >;
}

/**
 * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifact-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts`
 *
 * Get a list of the mailboxRestoreArtifact objects that are associated with an exchangeRestoreSession in a tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts',
    paramDefs: {
      path: ['exchangeRestoreSession-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}`
 *
 * A collection of restore points and destination details that can be used to restore Exchange mailboxes.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
    paramDefs: {
      path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
    paramDefs: {
      path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifact-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts',
    paramDefs: {
      path: ['exchangeRestoreSession-id'],
    },
    params,
    body,
  };
}

export const restorePoint = {
  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint`
   *
   * Represents the date and time when an artifact is protected by a protectionPolicy and can be restored.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exchangeRestoreSession-id', 'mailboxRestoreArtifact-id'],
      },
      params,
    };
  },
};
