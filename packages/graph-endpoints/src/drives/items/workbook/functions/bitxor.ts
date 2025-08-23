import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
