export * as fields from './fields';
export * as restoreVersion from './restoreVersion';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/versions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/versions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/versions`
 *
 * The list of previous versions of the list item.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions',
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
 * `GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 * The list of previous versions of the list item.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
