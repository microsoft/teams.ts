export * as driveRestoreArtifacts from './driveRestoreArtifacts';
export * as driveRestoreArtifactsBulkAdditionRequests from './driveRestoreArtifactsBulkAdditionRequests';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions`
 *
 * The list of OneDrive for Business restore sessions available in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
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
 * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}`
 *
 * The list of OneDrive for Business restore sessions available in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}`
 *
 * Update the properties of a oneDriveForBusinessRestoreSession object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    paramDefs: [{ name: 'oneDriveForBusinessRestoreSession-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions`
 *
 * Create a new oneDriveForBusinessRestoreSession object.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
    paramDefs: [],
    params,
    body,
  };
}
