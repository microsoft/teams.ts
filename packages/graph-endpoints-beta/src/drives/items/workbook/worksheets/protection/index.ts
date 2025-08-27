export * as protect from './protect';
export * as unprotect from './unprotect';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection',
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
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection`
 *
 * The sheet protection object for a worksheet. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection',
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
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
    ],
    params,
    body,
  };
}
