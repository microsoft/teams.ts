export * as siteRestoreArtifacts from './siteRestoreArtifacts';

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
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
    'get'
  >;
  'POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
    'post'
  >;
  'GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['sharePointRestoreSession-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['sharePointRestoreSession-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['sharePointRestoreSession-id'],
    },
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
  body: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['body']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/sharePointRestoreSessions',
    body,
  };
}

export const siteRestoreArtifactsBulkAdditionRequests = {
  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests`
   *
   * Get a list of the siteRestoreArtifactsBulkAdditionRequest objects associated with a sharePointRestoreSession. The siteWebUrls property is deliberately omitted from the response body in order to limit the response size.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharePointRestoreSession-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests`
   *
   * Create a new siteRestoreArtifactsBulkAdditionRequest object associated with a sharePointRestoreSession. The following steps describe how to create and manage a sharePointRestoreSession with bulk artifact additions:
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['body'],
    params?: IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
      paramDefs: {
        path: ['sharePointRestoreSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
   *
   * Get a siteRestoreArtifactsBulkAdditionRequest object by its id, associated with a sharePointRestoreSession.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharePointRestoreSession-id', 'siteRestoreArtifactsBulkAdditionRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        path: ['sharePointRestoreSession-id', 'siteRestoreArtifactsBulkAdditionRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
   *
   * Delete a siteRestoreArtifactsBulkAdditionRequest object associated with a sharepointRestoreSession.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharePointRestoreSession-id', 'siteRestoreArtifactsBulkAdditionRequest-id'],
      },
      params,
    };
  },
};
