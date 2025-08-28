import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/restore': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/restore',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/restore`
 *
 * Restore a driveItem that has been deleted and is currently in the recycle bin.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/restore']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/restore']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/restore',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
