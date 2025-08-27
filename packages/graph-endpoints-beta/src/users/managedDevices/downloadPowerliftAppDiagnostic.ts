import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
