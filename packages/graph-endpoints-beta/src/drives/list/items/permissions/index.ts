export * as grant from './grant';
export * as revokeGrants from './revokeGrants';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/permissions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/permissions',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/permissions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/permissions',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/permissions`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/permissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/permissions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/permissions',
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
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/permissions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/permissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/permissions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/permissions',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
