import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add`
 *
 * Adds rows to the end of the table. Note that the API can accept multiple rows data using this API. Adding one row at a time could lead to performance degradation. The recommended approach would be to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform single rows add operation. Experiment with the number of rows to determine the ideal number of rows to use in single API call.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/add',
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
