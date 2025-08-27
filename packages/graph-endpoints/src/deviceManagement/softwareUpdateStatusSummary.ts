import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/softwareUpdateStatusSummary': Operation<
    '/deviceManagement/softwareUpdateStatusSummary',
    'get'
  >;
}

/**
 * `GET /deviceManagement/softwareUpdateStatusSummary`
 *
 * Read properties and relationships of the softwareUpdateStatusSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/softwareUpdateStatusSummary']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/softwareUpdateStatusSummary']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/softwareUpdateStatusSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
