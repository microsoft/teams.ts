import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet`
 *
 * Return the worksheet to which the named item is scoped. Available only if the item is scoped to the worksheet. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookNamedItem-id', in: 'path' },
    ],
    params,
  };
}
