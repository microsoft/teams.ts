import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /shares/{sharedDriveItem-id}/permission/grant': Operation<
    '/shares/{sharedDriveItem-id}/permission/grant',
    'post'
  >;
}

/**
 * `POST /shares/{sharedDriveItem-id}/permission/grant`
 *
 * Grant users access to a link represented by a permission.
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/grant']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/permission/grant']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/permission/grant']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/permission/grant',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
