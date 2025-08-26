import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/checkout': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/checkout',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/checkout`
 *
 * Check out a driveItem resource to prevent others from editing the document, and prevent your changes from being visible until the documented is checked in.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkout']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkout']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkout']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/checkout',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
