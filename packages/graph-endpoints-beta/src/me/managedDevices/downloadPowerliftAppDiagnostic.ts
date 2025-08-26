import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/me/managedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/downloadPowerliftAppDiagnostic`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/downloadPowerliftAppDiagnostic']['body'],
  params?: IEndpoints['POST /me/managedDevices/downloadPowerliftAppDiagnostic']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/downloadPowerliftAppDiagnostic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/downloadPowerliftAppDiagnostic',
    paramDefs: [],
    params,
    body,
  };
}
