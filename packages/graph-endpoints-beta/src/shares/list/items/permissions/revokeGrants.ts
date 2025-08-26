import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants`
 *
 * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/permissions/{permission-id}/revokeGrants',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
