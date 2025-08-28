import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
 *
 * Delete a siteRestoreArtifactsBulkAdditionRequest object associated with a sharepointRestoreSession.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
      { name: 'siteRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests`
 *
 * Get a list of the siteRestoreArtifactsBulkAdditionRequest objects associated with a sharePointRestoreSession. The siteWebUrls property is deliberately omitted from the response body in order to limit the response size.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
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
 * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
 *
 * Get a siteRestoreArtifactsBulkAdditionRequest object by its id, associated with a sharePointRestoreSession.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharePointRestoreSession-id', in: 'path' },
      { name: 'siteRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    paramDefs: [
      { name: 'sharePointRestoreSession-id', in: 'path' },
      { name: 'siteRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests`
 *
 * Create a new siteRestoreArtifactsBulkAdditionRequest object associated with a sharePointRestoreSession. The following steps describe how to create and manage a sharePointRestoreSession with bulk artifact additions:
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
    paramDefs: [{ name: 'sharePointRestoreSession-id', in: 'path' }],
    params,
    body,
  };
}
