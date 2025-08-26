import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact`
 *
 * The artifact related to this indicator.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intelligenceProfileIndicator-id', in: 'path' },
    ],
    params,
  };
}
