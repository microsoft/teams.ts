import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyIconFilter',
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
