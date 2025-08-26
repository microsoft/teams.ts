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
  'DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes`
 *
 * The collection of content types defined for this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}`
 *
 * The collection of content types defined for this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
