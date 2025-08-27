export * as format from './format';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookChart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels`
 *
 * Represents the data labels on the chart. Read-only.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookChart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
      { name: 'workbookChart-id', in: 'path' },
    ],
    params,
    body,
  };
}
