export * as restorePoint from './restorePoint';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
      { name: 'driveRestoreArtifact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts`
 *
 * Get a list of the driveRestoreArtifact objects and their properties for a oneDriveForBusinessRestoreSession for a tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}`
 *
 * A collection of restore points and destination details that can be used to restore a OneDrive for work or school drive.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
      { name: 'driveRestoreArtifact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}',
    paramDefs: [
      { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
      { name: 'driveRestoreArtifact-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts',
    paramDefs: [{ name: 'oneDriveForBusinessRestoreSession-id', in: 'path' }],
    params,
    body,
  };
}
