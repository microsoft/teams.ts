import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
