import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment': Operation<
    '/deviceManagement/enableAndroidDeviceAdministratorEnrollment',
    'post'
  >;
}

/**
 * `POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment']['body'],
  params?: IEndpoints['POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/enableAndroidDeviceAdministratorEnrollment',
    paramDefs: [],
    params,
    body,
  };
}
