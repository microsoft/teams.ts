export * as grant from './grant';
export * as revokeGrants from './revokeGrants';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/permissions': Operation<
    '/drives/{drive-id}/list/permissions',
    'get'
  >;
  'GET /drives/{drive-id}/list/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/permissions/{permission-id}': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/permissions': Operation<
    '/drives/{drive-id}/list/permissions',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/permissions/{permission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/permissions`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/permissions',
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
 * `GET /drives/{drive-id}/list/permissions/{permission-id}`
 *
 * The set of permissions for the item. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/permissions/{permission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/permissions/{permission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/permissions/{permission-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/permissions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/permissions',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
