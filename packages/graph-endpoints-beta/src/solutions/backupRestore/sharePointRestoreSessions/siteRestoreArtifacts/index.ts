export * as restorePoint from './restorePoint';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
      { name: 'siteRestoreArtifact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts`
 *
 * List all the siteRestoreArtifact objects for a sharePointRestoreSession for the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}`
 *
 * A collection of restore points and destination details that can be used to restore SharePoint sites.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
      { name: 'siteRestoreArtifact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
    paramDefs: [
      { name: 'sharePointRestoreSession-id', in: 'path' },
      { name: 'siteRestoreArtifact-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts',
    paramDefs: [{ name: 'sharePointRestoreSession-id', in: 'path' }],
    params,
    body,
  };
}
