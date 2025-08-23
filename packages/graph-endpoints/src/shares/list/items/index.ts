export * as analytics from './analytics';
export * as createLink from './createLink';
export * as createdByUser from './createdByUser';
export * as documentSetVersions from './documentSetVersions';
export * as driveItem from './driveItem';
export * as fields from './fields';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items': Operation<
    '/shares/{sharedDriveItem-id}/list/items',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items': Operation<
    '/shares/{sharedDriveItem-id}/list/items',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items`
 *
 * All items contained in the list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/items']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}`
 *
 * All items contained in the list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/items']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
