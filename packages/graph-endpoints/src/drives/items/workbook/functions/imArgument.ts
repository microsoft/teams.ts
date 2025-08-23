import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
