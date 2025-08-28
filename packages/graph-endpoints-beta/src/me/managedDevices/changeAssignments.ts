import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/changeAssignments': Operation<
    '/me/managedDevices/{managedDevice-id}/changeAssignments',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/changeAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/changeAssignments']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/changeAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/changeAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/changeAssignments',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
