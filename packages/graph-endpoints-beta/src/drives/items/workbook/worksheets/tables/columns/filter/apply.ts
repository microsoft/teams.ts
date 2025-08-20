import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply`
 *
 * Apply the given filter criteria on the given column.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/apply',
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
