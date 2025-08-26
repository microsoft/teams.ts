import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}/dataConnector',
    'get'
  >;
}

/**
 * `GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector`
 *
 * The data connector to the source system from where this flow gets its data.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/dataConnector']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}/dataConnector',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'inboundFlow-id', in: 'path' },
    ],
    params,
  };
}
