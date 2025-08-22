import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact`
 *
 * The artifact related to this indicator.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'articleIndicator-id', in: 'path' },
    ],
    params,
  };
}
