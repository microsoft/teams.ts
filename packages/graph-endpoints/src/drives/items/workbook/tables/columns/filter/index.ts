export * as apply from './apply';
export * as applyBottomItemsFilter from './applyBottomItemsFilter';
export * as applyBottomPercentFilter from './applyBottomPercentFilter';
export * as applyCellColorFilter from './applyCellColorFilter';
export * as applyCustomFilter from './applyCustomFilter';
export * as applyDynamicFilter from './applyDynamicFilter';
export * as applyFontColorFilter from './applyFontColorFilter';
export * as applyIconFilter from './applyIconFilter';
export * as applyTopItemsFilter from './applyTopItemsFilter';
export * as applyTopPercentFilter from './applyTopPercentFilter';
export * as applyValuesFilter from './applyValuesFilter';
export * as clear from './clear';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
      { name: 'workbookTableColumn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter`
 *
 * The filter applied to the column. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
      { name: 'workbookTableColumn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
      { name: 'workbookTableColumn-id', in: 'path' },
    ],
    params,
    body,
  };
}
