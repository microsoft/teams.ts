import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createUploadSession',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/createUploadSession',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
