import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
