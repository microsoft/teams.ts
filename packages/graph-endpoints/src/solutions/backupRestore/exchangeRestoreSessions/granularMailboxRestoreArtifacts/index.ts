import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
    'post'
  >;
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint',
    'get'
  >;
}

/**
 * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['exchangeRestoreSession-id', 'granularMailboxRestoreArtifact-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
    paramDefs: {
      path: ['exchangeRestoreSession-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    paramDefs: {
      path: ['exchangeRestoreSession-id', 'granularMailboxRestoreArtifact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    paramDefs: {
      path: ['exchangeRestoreSession-id', 'granularMailboxRestoreArtifact-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
    paramDefs: {
      path: ['exchangeRestoreSession-id'],
    },
    params,
    body,
  };
}

export const restorePoint = {
  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint`
   *
   * Represents the date and time when an artifact is protected by a protectionPolicy and can be restored.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exchangeRestoreSession-id', 'granularMailboxRestoreArtifact-id'],
      },
      params,
    };
  },
};
