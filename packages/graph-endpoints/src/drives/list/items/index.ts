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
  'DELETE /drives/{drive-id}/list/items/{listItem-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items': Operation<'/drives/{drive-id}/list/items', 'get'>;
  'GET /drives/{drive-id}/list/items/{listItem-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/items': Operation<'/drives/{drive-id}/list/items', 'post'>;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}']['response']> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items`
 *
 * All items contained in the list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/items']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items',
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
 * `GET /drives/{drive-id}/list/items/{listItem-id}`
 *
 * All items contained in the list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}']['response']> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/items`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/items']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/items',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
