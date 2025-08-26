export * as add from './add';
export * as filter from './filter';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
      { name: 'workbookTableColumn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns`
 *
 * The list of all the columns in the table. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns',
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
      { name: 'workbookTable-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}`
 *
 * The list of all the columns in the table. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
      { name: 'workbookTableColumn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
      { name: 'workbookTableColumn-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
    ],
    params,
    body,
  };
}
