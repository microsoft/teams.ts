export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments`
 *
 * Represents a collection of comments in a workbook.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments',
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
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}`
 *
 * Represents a collection of comments in a workbook.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
