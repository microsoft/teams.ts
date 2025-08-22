import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion`
 *
 * Restore a previous version of a DriveItem to be the current version. This will create a new version with the contents of the previous version, but preserves all existing versions of the file.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/restoreVersion',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
