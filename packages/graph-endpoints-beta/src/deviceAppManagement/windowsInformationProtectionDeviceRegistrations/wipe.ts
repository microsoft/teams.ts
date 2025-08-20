import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe': Operation<
    '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}/wipe',
    paramDefs: [{ name: 'windowsInformationProtectionDeviceRegistration-id', in: 'path' }],
    params,
    body,
  };
}
