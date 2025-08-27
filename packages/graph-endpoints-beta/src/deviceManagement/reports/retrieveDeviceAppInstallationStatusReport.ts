import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport': Operation<
    '/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport',
    paramDefs: [],
    params,
    body,
  };
}
