import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add`
 *
 * Use this API to create a new Table.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/add',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookWorksheet-id', in: 'path' },
    ],
    params,
    body,
  };
}
