import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant': Operation<
    '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant`
 *
 * Grant users access to a link represented by a permission.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/permissions/{permission-id}/grant',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
