import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic',
    paramDefs: [],
    params,
    body,
  };
}
