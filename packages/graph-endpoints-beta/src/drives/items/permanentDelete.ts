import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/permanentDelete',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
