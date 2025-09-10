export * as containerTypeRegistrations from './containerTypeRegistrations';
export * as containers from './containers';
export * as deletedContainers from './deletedContainers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage': Operation<'/storage/fileStorage', 'delete'>;
  'GET /storage/fileStorage': Operation<'/storage/fileStorage', 'get'>;
  'PATCH /storage/fileStorage': Operation<'/storage/fileStorage', 'patch'>;
  'GET /storage/fileStorage/containerTypes': Operation<
    '/storage/fileStorage/containerTypes',
    'get'
  >;
  'POST /storage/fileStorage/containerTypes': Operation<
    '/storage/fileStorage/containerTypes',
    'post'
  >;
  'GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}': Operation<
    '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}': Operation<
    '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    'patch'
  >;
  'DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}': Operation<
    '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    'delete'
  >;
}

/**
 * `DELETE /storage/fileStorage`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage']['parameters']
): EndpointRequest<IEndpoints['DELETE /storage/fileStorage']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage']['body']
): EndpointRequest<IEndpoints['PATCH /storage/fileStorage']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage',
    body,
  };
}

export const containerTypes = {
  /**
   * `GET /storage/fileStorage/containerTypes`
   *
   * Get a list of the fileStorageContainerType objects and their properties for the current tenant.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/containerTypes']['parameters']
  ): EndpointRequest<IEndpoints['GET /storage/fileStorage/containerTypes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containerTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /storage/fileStorage/containerTypes`
   *
   * Create a new fileStorageContainerType in the owning tenant. The number of container types in a tenant is limited.
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/containerTypes']['body']
  ): EndpointRequest<IEndpoints['POST /storage/fileStorage/containerTypes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containerTypes',
      body,
    };
  },
  /**
   * `GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}`
   *
   * Get a fileStorageContainerType using its ID.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainerType-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}`
   *
   * Update the properties of a fileStorageContainerType object. The properties updated are reflected in each registered fileStorageContainerTypeRegistration in a maximum of 24 hours. Settings overridden in a tenant aren&#x27;t updated. ETag is used for optimistic concurrency control. It must match the value from Create, Get or the previous Update.
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
      paramDefs: {
        path: ['fileStorageContainerType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}`
   *
   * Delete a fileStorageContainerType object from the tenant. A fileStorageContainerType can only be deleted if no registrations are associated with it in any tenant.
   */
  del: function del(
    params?: IEndpoints['DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['fileStorageContainerType-id'],
      },
      params,
    };
  },
};
