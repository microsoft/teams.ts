export * as replies from './replies';
export * as task from './task';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment`
 *
 * The comment that the task is associated with.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tasks/{workbookDocumentTask-id}/comment',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookWorksheet-id', 'workbookDocumentTask-id'],
    },
    params,
    body,
  };
}
