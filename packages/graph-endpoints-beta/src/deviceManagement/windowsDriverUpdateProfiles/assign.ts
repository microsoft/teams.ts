import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign',
    paramDefs: [{ name: 'windowsDriverUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
