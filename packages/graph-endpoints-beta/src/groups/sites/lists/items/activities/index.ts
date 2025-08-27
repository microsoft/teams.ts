export * as driveItem from './driveItem';
export * as listItem from './listItem';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
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
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities',
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
