import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/managedDeviceOverview': Operation<
    '/deviceManagement/managedDeviceOverview',
    'get'
  >;
}

/**
 * `GET /deviceManagement/managedDeviceOverview`
 *
 * Device overview
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDeviceOverview']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceOverview']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/managedDeviceOverview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
