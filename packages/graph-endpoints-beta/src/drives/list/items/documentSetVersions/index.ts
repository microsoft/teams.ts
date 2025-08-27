export * as fields from './fields';
export * as restore from './restore';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    'get'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions`
 *
 * Version information for a document set version created by a user.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
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
 * `GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 * Version information for a document set version created by a user.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
