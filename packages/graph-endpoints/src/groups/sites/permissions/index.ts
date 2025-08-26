export * as grant from './grant';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/permissions': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/permissions': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/permissions`
 *
 * The permissions associated with the site. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/permissions',
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
 * `GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}`
 *
 * The permissions associated with the site. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/permissions/{permission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/permissions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/permissions',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
