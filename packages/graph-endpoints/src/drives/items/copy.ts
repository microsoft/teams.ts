import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/copy': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/copy',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/copy`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/copy',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
