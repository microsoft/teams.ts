export * as fields from './fields';
export * as restoreVersion from './restoreVersion';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
 *
 * The list of previous versions of the list item.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
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
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 * The list of previous versions of the list item.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
