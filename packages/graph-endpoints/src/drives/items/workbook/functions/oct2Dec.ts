import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
