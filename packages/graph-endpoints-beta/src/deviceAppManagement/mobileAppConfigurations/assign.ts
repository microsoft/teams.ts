import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign',
    paramDefs: [{ name: 'managedDeviceMobileAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
