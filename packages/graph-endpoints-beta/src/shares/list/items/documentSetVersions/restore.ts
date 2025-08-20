import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
 *
 * Restore a document set version.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
