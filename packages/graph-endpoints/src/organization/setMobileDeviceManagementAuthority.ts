import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/{organization-id}/setMobileDeviceManagementAuthority': Operation<
    '/organization/{organization-id}/setMobileDeviceManagementAuthority',
    'post'
  >;
}

/**
 * `POST /organization/{organization-id}/setMobileDeviceManagementAuthority`
 *
 * Set mobile device management authority
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/setMobileDeviceManagementAuthority']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/setMobileDeviceManagementAuthority']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/setMobileDeviceManagementAuthority']['response']
> {
  return {
    method: 'post',
    path: '/organization/{organization-id}/setMobileDeviceManagementAuthority',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
