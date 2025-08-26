import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/checkin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/checkin',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/checkin`
 *
 * Check in a checked out driveItem resource, which makes the version of the document available to others.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkin']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkin']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkin']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/checkin',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
