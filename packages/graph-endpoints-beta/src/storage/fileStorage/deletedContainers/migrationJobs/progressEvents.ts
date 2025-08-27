import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointMigrationJob-id', in: 'path' },
      { name: 'sharePointMigrationEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointMigrationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointMigrationJob-id', in: 'path' },
      { name: 'sharePointMigrationEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents/{sharePointMigrationEvent-id}',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointMigrationJob-id', in: 'path' },
      { name: 'sharePointMigrationEvent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/migrationJobs/{sharePointMigrationJob-id}/progressEvents',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'sharePointMigrationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
