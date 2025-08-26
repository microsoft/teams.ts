import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint': Operation<
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint',
    'get'
  >;
}

/**
 * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint`
 *
 * Represents the date and time when an artifact is protected by a protectionPolicy and can be restored.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeRestoreSession-id', in: 'path' },
      { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
    ],
    params,
  };
}
