import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/moveDevicesToOU': Operation<
    '/deviceManagement/comanagedDevices/moveDevicesToOU',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/moveDevicesToOU`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/moveDevicesToOU']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/moveDevicesToOU']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/moveDevicesToOU']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/moveDevicesToOU',
    paramDefs: [],
    params,
    body,
  };
}
