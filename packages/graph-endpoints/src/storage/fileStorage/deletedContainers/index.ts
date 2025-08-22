export * as activate from './activate';
export * as columns from './columns';
export * as drive from './drive';
export * as lock from './lock';
export * as permanentDelete from './permanentDelete';
export * as permissions from './permissions';
export * as recycleBin from './recycleBin';
export * as restore from './restore';
export * as unlock from './unlock';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers': Operation<
    '/storage/fileStorage/deletedContainers',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers': Operation<
    '/storage/fileStorage/deletedContainers',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['response']
> {
  return {
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers`
 *
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage/deletedContainers']['response']> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers',
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
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['response']
> {
  return {
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers']['parameters']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/deletedContainers']['response']> {
  return {
    method: 'post',
    path: '/storage/fileStorage/deletedContainers',
    paramDefs: [],
    params,
    body,
  };
}
