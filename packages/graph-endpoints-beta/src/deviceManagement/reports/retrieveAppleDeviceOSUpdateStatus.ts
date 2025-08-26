import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus': Operation<
    '/deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus',
    paramDefs: [],
    params,
    body,
  };
}
