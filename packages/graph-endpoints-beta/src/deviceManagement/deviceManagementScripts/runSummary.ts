import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary`
 *
 * Run summary for device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementScript-id', in: 'path' },
    ],
    params,
  };
}
