export * as restorePoint from './restorePoint';

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
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exchangeRestoreSession-id', in: 'path' },
      { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeRestoreSession-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeRestoreSession-id', in: 'path' },
      { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
    paramDefs: [
      { name: 'exchangeRestoreSession-id', in: 'path' },
      { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
    paramDefs: [{ name: 'exchangeRestoreSession-id', in: 'path' }],
    params,
    body,
  };
}
