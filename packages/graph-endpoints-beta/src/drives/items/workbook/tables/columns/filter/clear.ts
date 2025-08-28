import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear`
 *
 * Clear the filter on the given column.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/clear',
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
