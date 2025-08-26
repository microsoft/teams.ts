import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory`
 *
 * Sync the driver inventory of a WindowsDriverUpdateProfile.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory',
    paramDefs: [{ name: 'windowsDriverUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
