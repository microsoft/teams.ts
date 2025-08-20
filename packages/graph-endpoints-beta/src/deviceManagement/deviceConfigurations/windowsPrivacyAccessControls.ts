import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
