import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign',
    paramDefs: [{ name: 'windowsQualityUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
