import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/applyBottomPercentFilter',
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
