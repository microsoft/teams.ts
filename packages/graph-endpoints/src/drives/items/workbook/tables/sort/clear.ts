import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear`
 *
 * Clears the sorting that is currently on the table. While this doesn&#x27;t modify the table&#x27;s ordering, it clears the state of the header buttons.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
    ],
    params,
    body,
  };
}
