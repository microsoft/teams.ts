export * as sourceColumn from './sourceColumn';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns`
 *
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns',
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
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'fileStorageContainer-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/columns',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
