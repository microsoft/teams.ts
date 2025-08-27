import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData/inboundFlows/{inboundFlow-id}/year': Operation<
    '/external/industryData/inboundFlows/{inboundFlow-id}/year',
    'get'
  >;
}

/**
 * `GET /external/industryData/inboundFlows/{inboundFlow-id}/year`
 *
 * The year associated to the data that this flow brings in.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/year']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/inboundFlows/{inboundFlow-id}/year']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/inboundFlows/{inboundFlow-id}/year',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'inboundFlow-id', in: 'path' },
    ],
    params,
  };
}
