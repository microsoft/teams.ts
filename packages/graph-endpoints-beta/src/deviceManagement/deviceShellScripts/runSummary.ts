import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary`
 *
 * Run summary for device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceShellScript-id', in: 'path' },
    ],
    params,
  };
}
