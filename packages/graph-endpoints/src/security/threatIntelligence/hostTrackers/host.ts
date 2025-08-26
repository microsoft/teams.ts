import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host`
 *
 * The host related to this hostTracker. When navigating to a hostTracker from a host, this should be assumed to be a return reference.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostTracker-id', in: 'path' },
    ],
    params,
  };
}
