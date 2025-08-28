import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/downloadAppDiagnostics': Operation<
    '/me/managedDevices/downloadAppDiagnostics',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/downloadAppDiagnostics`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/downloadAppDiagnostics']['body'],
  params?: IEndpoints['POST /me/managedDevices/downloadAppDiagnostics']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/downloadAppDiagnostics']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/downloadAppDiagnostics',
    paramDefs: [],
    params,
    body,
  };
}
