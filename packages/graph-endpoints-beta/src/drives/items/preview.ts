import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/preview': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/preview',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/preview`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/preview']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/preview']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/preview']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/preview',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
