import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/restoreSessions': Operation<
    '/solutions/backupRestore/restoreSessions',
    'get'
  >;
  'GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/restoreSessions': Operation<
    '/solutions/backupRestore/restoreSessions',
    'post'
  >;
  'POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
 *
 * Delete a draft restoreSessionBase object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['restoreSessionBase-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/restoreSessions`
 *
 * Get a list of restoreSession objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/restoreSessions']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/restoreSessions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restoreSessions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
 *
 * Get the properties of a restoreSession object by ID.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    paramDefs: {
      path: ['restoreSessionBase-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    paramDefs: {
      path: ['restoreSessionBase-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/restoreSessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/restoreSessions']['body']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/restoreSessions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/restoreSessions',
    body,
  };
}

export const activate = {
  /**
   * `POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate`
   *
   * Activate a draft restoreSessionBase object to restore a protection unit. The following points apply to restoring a protection unit:
   */
  create: function create(
    params?: IEndpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate',
      paramDefs: {
        path: ['restoreSessionBase-id'],
      },
      params,
    };
  },
};
