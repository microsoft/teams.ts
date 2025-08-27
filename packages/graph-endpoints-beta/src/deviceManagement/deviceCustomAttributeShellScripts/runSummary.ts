import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/runSummary': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/runSummary',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/runSummary`
 *
 * Run summary for device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/runSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
    ],
    params,
  };
}
