export * as driveRestoreArtifacts from './driveRestoreArtifacts';

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
  'GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests',
    'get'
  >;
  'POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests',
    'post'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
    'delete'
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
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['oneDriveForBusinessRestoreSession-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    paramDefs: {
      path: ['oneDriveForBusinessRestoreSession-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
    paramDefs: {
      path: ['oneDriveForBusinessRestoreSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['body']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
    body,
  };
}

export const driveRestoreArtifactsBulkAdditionRequests = {
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests`
   *
   * Get a list of the driveRestoreArtifactsBulkAdditionRequest objects associated with a oneDriveForBusinessRestoreSession. The drives property is deliberately omitted from the response body in order to limit the response size.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['oneDriveForBusinessRestoreSession-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests`
   *
   * Create a driveRestoreArtifactsBulkAdditionRequest object associated with a oneDriveForBusinessRestoreSession. The following steps describe how to create and manage a oneDriveForBusinessRestoreSession with bulk artifact additions.
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['body'],
    params?: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests',
      paramDefs: {
        path: ['oneDriveForBusinessRestoreSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}`
   *
   * Get a driveRestoreArtifactsBulkAdditionRequest object by its id, associated with a oneDriveForBusinessRestoreSession.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'oneDriveForBusinessRestoreSession-id',
          'driveRestoreArtifactsBulkAdditionRequest-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        path: [
          'oneDriveForBusinessRestoreSession-id',
          'driveRestoreArtifactsBulkAdditionRequest-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}`
   *
   * Delete a driveRestoreArtifactsBulkAdditionRequest object associated with a oneDriveForBusinessRestoreSession.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'oneDriveForBusinessRestoreSession-id',
          'driveRestoreArtifactsBulkAdditionRequest-id',
        ],
      },
      params,
    };
  },
};
