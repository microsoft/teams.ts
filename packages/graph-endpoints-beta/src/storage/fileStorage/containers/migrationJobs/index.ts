import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs',
    'get'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs',
    'post'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
    'get'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
    'post'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    'patch'
  >;
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    'delete'
  >;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id', 'sharePointMigrationJob-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs`
 *
 * The collection of sharePointMigrationJob objects local to the container. Read-write.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}`
 *
 * The collection of sharePointMigrationJob objects local to the container. Read-write.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'sharePointMigrationJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}',
    paramDefs: {
      path: ['fileStorageContainer-id', 'sharePointMigrationJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

export const progressEvents = {
  /**
   * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents`
   *
   * A collection of migration events that reflects the job status changes.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['fileStorageContainer-id', 'sharePointMigrationJob-id'],
      },
      params,
    };
  },
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['body'],
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
      paramDefs: {
        path: ['fileStorageContainer-id', 'sharePointMigrationJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}`
   *
   * A collection of migration events that reflects the job status changes.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'fileStorageContainer-id',
          'sharePointMigrationJob-id',
          'sharePointMigrationEvent-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
      paramDefs: {
        path: [
          'fileStorageContainer-id',
          'sharePointMigrationJob-id',
          'sharePointMigrationEvent-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'fileStorageContainer-id',
          'sharePointMigrationJob-id',
          'sharePointMigrationEvent-id',
        ],
      },
      params,
    };
  },
};
