export * as addCopy from './addCopy';
export * as addCopyFromContentTypeHub from './addCopyFromContentTypeHub';
export * as associateWithHubSites from './associateWithHubSites';
export * as base from './base';
export * as baseTypes from './baseTypes';
export * as columnLinks from './columnLinks';
export * as columnPositions from './columnPositions';
export * as columns from './columns';
export * as copyToDefaultContentLocation from './copyToDefaultContentLocation';
export * as publish from './publish';
export * as unpublish from './unpublish';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes`
 *
 * The collection of content types present in this list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes',
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
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}`
 *
 * The collection of content types present in this list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
