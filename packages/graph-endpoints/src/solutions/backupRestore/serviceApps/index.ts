import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/serviceApps': Operation<
    '/solutions/backupRestore/serviceApps',
    'get'
  >;
  'GET /solutions/backupRestore/serviceApps/{serviceApp-id}': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/serviceApps': Operation<
    '/solutions/backupRestore/serviceApps',
    'post'
  >;
  'POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}/activate',
    'post'
  >;
  'POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}`
 *
 * Delete a serviceApp.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['serviceApp-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/serviceApps`
 *
 * Get a list of serviceApp objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/serviceApps']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/serviceApps']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/serviceApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/serviceApps/{serviceApp-id}`
 *
 * Read the properties and relationships of a serviceApp object.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    paramDefs: {
      path: ['serviceApp-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    paramDefs: {
      path: ['serviceApp-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/serviceApps`
 *
 * Create a new serviceApp.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/serviceApps']['body']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/serviceApps']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/serviceApps',
    body,
  };
}

export const activate = {
  /**
   * `POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate`
   *
   * Activate a serviceApp.
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['body'],
    params?: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/serviceApps/{serviceApp-id}/activate',
      paramDefs: {
        path: ['serviceApp-id'],
      },
      params,
      body,
    };
  },
};

export const deactivate = {
  /**
   * `POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate`
   *
   * Deactivate a serviceApp.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate',
      paramDefs: {
        path: ['serviceApp-id'],
      },
      params,
    };
  },
};
