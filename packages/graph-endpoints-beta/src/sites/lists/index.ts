export * as activities from './activities';
export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as drive from './drive';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as operations from './operations';
export * as permissions from './permissions';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}': Operation<
    '/sites/{site-id}/lists/{list-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists': Operation<'/sites/{site-id}/lists', 'get'>;
  'GET /sites/{site-id}/lists/{list-id}': Operation<'/sites/{site-id}/lists/{list-id}', 'get'>;
  'PATCH /sites/{site-id}/lists/{list-id}': Operation<'/sites/{site-id}/lists/{list-id}', 'patch'>;
  'POST /sites/{site-id}/lists': Operation<'/sites/{site-id}/lists', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/lists/{list-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /sites/{site-id}/lists`
  *
  * Get the collection of lists for a site. Lists with the system facet are hidden by default.
To list them, include system in your $select statement.
  */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists',
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
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}`
 *
 * Return the metadata for a list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/lists/{list-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists`
 *
 * Create a new list in a site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
