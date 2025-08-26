export * as siteRestoreArtifacts from './siteRestoreArtifacts';
export * as siteRestoreArtifactsBulkAdditionRequests from './siteRestoreArtifactsBulkAdditionRequests';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/sharePointRestoreSessions': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/sharePointRestoreSessions`
 *
 * The list of SharePoint restore sessions available in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/sharePointRestoreSessions',
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
 * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}`
 *
 * The list of SharePoint restore sessions available in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
    paramDefs: [{ name: 'sharePointRestoreSession-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/sharePointRestoreSessions`
 *
 * Create a new sharePointRestoreSession object.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/sharePointRestoreSessions',
    paramDefs: [],
    params,
    body,
  };
}
