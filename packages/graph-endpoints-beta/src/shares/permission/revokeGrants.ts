import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/permission/revokeGrants': Operation<
    '/shares/{sharedDriveItem-id}/permission/revokeGrants',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/permission/revokeGrants`
 *
 * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/revokeGrants']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/revokeGrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/permission/revokeGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/permission/revokeGrants',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
