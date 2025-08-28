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
 * Create a copy of a driveItem asynchronously. You can optionally copy exclusively the child items, specify a new parent folder, or provide a new name. Once the request is accepted, the operation is queued and processed asynchronously. Use the monitor URL to track progress until the operation completes.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['response']> {
  return {
    ver: 'beta',
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
