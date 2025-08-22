export * as fields from './fields';
export * as restore from './restore';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions`
 *
 * Version information for a document set version created by a user.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
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
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 * Version information for a document set version created by a user.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
