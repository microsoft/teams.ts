export * as granularMailboxRestoreArtifacts from './granularMailboxRestoreArtifacts';
export * as mailboxRestoreArtifacts from './mailboxRestoreArtifacts';
export * as mailboxRestoreArtifactsBulkAdditionRequests from './mailboxRestoreArtifactsBulkAdditionRequests';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exchangeRestoreSession-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeRestoreSession-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'exchangeRestoreSession-id', in: 'path' }],
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
  body: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/exchangeRestoreSessions',
    paramDefs: [],
    params,
    body,
  };
}
