import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign',
    paramDefs: [{ name: 'deviceShellScript-id', in: 'path' }],
    params,
    body,
  };
}
