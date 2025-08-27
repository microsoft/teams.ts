import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations`
 *
 * The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
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
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}`
 *
 * The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/operations',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
