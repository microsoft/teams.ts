import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/validatePermission': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/validatePermission',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/validatePermission`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/validatePermission']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/validatePermission']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/validatePermission']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/validatePermission',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
