export * as createdByUser from './createdByUser';
export * as driveItem from './driveItem';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as dolist from './list';
export * as listItem from './listItem';
export * as permission from './permission';
export * as root from './root';
export * as site from './site';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}': Operation<'/shares/{sharedDriveItem-id}', 'delete'>;
  'GET /shares': Operation<'/shares', 'get'>;
  'GET /shares/{sharedDriveItem-id}': Operation<'/shares/{sharedDriveItem-id}', 'get'>;
  'PATCH /shares/{sharedDriveItem-id}': Operation<'/shares/{sharedDriveItem-id}', 'patch'>;
  'POST /shares': Operation<'/shares', 'post'>;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}']['response']> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares`
 *
 * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
 */
export function list(
  params?: IEndpoints['GET /shares']['parameters']
): EndpointRequest<IEndpoints['GET /shares']['response']> {
  return {
    method: 'get',
    path: '/shares',
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
 * `GET /shares/{sharedDriveItem-id}`
 *
 * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /shares/{sharedDriveItem-id}']['response']> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /shares`
 *
 */
export function create(
  body: IEndpoints['POST /shares']['body'],
  params?: IEndpoints['POST /shares']['parameters']
): EndpointRequest<IEndpoints['POST /shares']['response']> {
  return {
    method: 'post',
    path: '/shares',
    paramDefs: [],
    params,
    body,
  };
}
