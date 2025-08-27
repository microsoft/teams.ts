import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/moveDevicesToOU': Operation<
    '/deviceManagement/managedDevices/moveDevicesToOU',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/moveDevicesToOU`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/moveDevicesToOU']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/moveDevicesToOU']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/moveDevicesToOU']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/moveDevicesToOU',
    paramDefs: [],
    params,
    body,
  };
}
