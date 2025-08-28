import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/downloadAppDiagnostics': Operation<
    '/deviceManagement/managedDevices/downloadAppDiagnostics',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/downloadAppDiagnostics`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/downloadAppDiagnostics']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/downloadAppDiagnostics']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/downloadAppDiagnostics']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/downloadAppDiagnostics',
    paramDefs: [],
    params,
    body,
  };
}
