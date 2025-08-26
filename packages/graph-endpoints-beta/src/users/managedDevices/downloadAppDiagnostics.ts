import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/downloadAppDiagnostics': Operation<
    '/users/{user-id}/managedDevices/downloadAppDiagnostics',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/downloadAppDiagnostics`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/downloadAppDiagnostics']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/downloadAppDiagnostics']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/downloadAppDiagnostics']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/downloadAppDiagnostics',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
