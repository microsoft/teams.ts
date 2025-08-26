import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem': Operation<
    '/external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem',
    'get'
  >;
}

/**
 * `GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem`
 *
 * The sourceSystemDefinition this connector is connected to.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/dataConnectors/{industryDataConnector-id}/sourceSystem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'industryDataConnector-id', in: 'path' },
    ],
    params,
  };
}
