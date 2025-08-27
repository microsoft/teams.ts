import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign',
    paramDefs: [{ name: 'windowsFeatureUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
