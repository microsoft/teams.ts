import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/deviceManagement/managedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/downloadPowerliftAppDiagnostic',
    paramDefs: [],
    params,
    body,
  };
}
