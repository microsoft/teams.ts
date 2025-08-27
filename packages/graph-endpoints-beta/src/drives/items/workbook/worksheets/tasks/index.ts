export * as changes from './changes';
export * as comment from './comment';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookDocumentTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks`
 *
 * Collection of document tasks on this worksheet. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks',
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
      { name: 'workbookWorksheet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}`
 *
 * Collection of document tasks on this worksheet. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookDocumentTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookDocumentTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
    ],
    params,
    body,
  };
}
