import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet`
 *
 * The worksheet containing the current table. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookTable-id', in: 'path' },
    ],
    params,
  };
}
