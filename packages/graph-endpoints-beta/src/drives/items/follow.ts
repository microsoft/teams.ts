import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/follow': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/follow',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/follow`
 *
 * Follow a driveItem.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/follow']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/follow']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/follow']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/follow',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
