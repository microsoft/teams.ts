import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/downloadAppDiagnostics': Operation<
    '/deviceManagement/comanagedDevices/downloadAppDiagnostics',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/downloadAppDiagnostics`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/downloadAppDiagnostics']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/downloadAppDiagnostics']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/downloadAppDiagnostics']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/downloadAppDiagnostics',
    paramDefs: [],
    params,
    body,
  };
}
