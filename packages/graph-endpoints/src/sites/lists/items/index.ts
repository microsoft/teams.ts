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
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items': Operation<
    '/sites/{site-id}/lists/{list-id}/items',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items': Operation<
    '/sites/{site-id}/lists/{list-id}/items',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 * Removes an item from a list.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items`
 *
 * Get the collection of items in a list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/items']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items',
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
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 * Returns the metadata for an item in a list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items`
 *
 * Create a new listItem in a list.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/items']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
