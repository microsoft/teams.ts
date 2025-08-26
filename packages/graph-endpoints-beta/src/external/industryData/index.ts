export * as dataConnectors from './dataConnectors';
export * as inboundFlows from './inboundFlows';
export * as operations from './operations';
export * as outboundProvisioningFlowSets from './outboundProvisioningFlowSets';
export * as referenceDefinitions from './referenceDefinitions';
export * as roleGroups from './roleGroups';
export * as runs from './runs';
export * as sourceSystems from './sourceSystems';
export * as years from './years';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData': Operation<'/external/industryData', 'get'>;
}

/**
 * `GET /external/industryData`
 *
 */
export function get(
  params?: IEndpoints['GET /external/industryData']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
