import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/restorePoints': Operation<
    '/solutions/backupRestore/restorePoints',
    'get'
  >;
  'GET /solutions/backupRestore/restorePoints/{restorePoint-id}': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/restorePoints': Operation<
    '/solutions/backupRestore/restorePoints',
    'post'
  >;
  'GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit',
    'get'
  >;
  'POST /solutions/backupRestore/restorePoints/search': Operation<
    '/solutions/backupRestore/restorePoints/search',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['restorePoint-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/restorePoints`
 *
 * List of restore points in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/restorePoints']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/restorePoints']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restorePoints',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/restorePoints/{restorePoint-id}`
 *
 * List of restore points in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    paramDefs: {
      path: ['restorePoint-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    paramDefs: {
      path: ['restorePoint-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/restorePoints`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/restorePoints']['body']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/restorePoints']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/restorePoints',
    body,
  };
}

export const protectionUnit = {
  /**
   * `GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit`
   *
   * The site, drive, or mailbox units that are protected under a protection policy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['restorePoint-id'],
      },
      params,
    };
  },
};

export const search = {
  /**
   * `POST /solutions/backupRestore/restorePoints/search`
   *
   * Search for the restorePoint objects associated with a protectionUnit.
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/restorePoints/search']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/backupRestore/restorePoints/search']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/backupRestore/restorePoints/search',
      body,
    };
  },
};
