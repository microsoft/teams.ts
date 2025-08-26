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
  'DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/contentTypes`
 *
 * Get the collection of contentType resources in a list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
 *
 * The collection of content types present in this list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
