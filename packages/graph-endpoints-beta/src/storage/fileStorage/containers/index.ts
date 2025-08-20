export * as activate from './activate';
export * as columns from './columns';
export * as drive from './drive';
export * as lock from './lock';
export * as migrationJobs from './migrationJobs';
export * as permanentDelete from './permanentDelete';
export * as permissions from './permissions';
export * as provisionMigrationContainers from './provisionMigrationContainers';
export * as recycleBin from './recycleBin';
export * as restore from './restore';
export * as sharePointGroups from './sharePointGroups';
export * as unlock from './unlock';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containers': Operation<'/storage/fileStorage/containers', 'get'>;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containers': Operation<'/storage/fileStorage/containers', 'post'>;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers`
 *
 * Get a list of fileStorageContainer objects that are accessible to a caller. The containerTypeId filter parameter is required.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage/containers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers',
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
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}`
 *
 * Retrieve the properties of a fileStorageContainer.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containers`
 *
 * Create a new fileStorageContainer object.  The respective container type identified by containerTypeId must be enabled in the tenant.  For delegated calls, the calling user is set as the owner of the fileStorageContainer.
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containers']['parameters']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/containers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers',
    paramDefs: [],
    params,
    body,
  };
}
