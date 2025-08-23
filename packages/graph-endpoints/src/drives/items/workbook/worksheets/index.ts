export * as add from './add';
export * as charts from './charts';
export * as names from './names';
export * as pivotTables from './pivotTables';
export * as protection from './protection';
export * as tables from './tables';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets`
 *
 * Represents a collection of worksheets associated with the workbook. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets',
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
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}`
 *
 * Represents a collection of worksheets associated with the workbook. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}',
    paramDefs: [
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
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
