import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction',
    paramDefs: [{ name: 'windowsDriverUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
