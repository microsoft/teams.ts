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
  'DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/contentTypes': Operation<
    '/drives/{drive-id}/list/contentTypes',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/contentTypes': Operation<
    '/drives/{drive-id}/list/contentTypes',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes`
 *
 * The collection of content types present in this list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}`
 *
 * The collection of content types present in this list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
