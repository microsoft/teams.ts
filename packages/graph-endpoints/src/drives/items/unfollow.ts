import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/unfollow': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/unfollow',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/unfollow`
 *
 * Unfollow a driveItem.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/unfollow']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/unfollow']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/unfollow']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/unfollow',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
