import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/trackers': Operation<
    '/security/threatIntelligence/hosts/{host-id}/trackers',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/trackers`
 *
 * Get a list of hostTracker resources.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/trackers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}`
 *
 * The hostTrackers that are associated with this host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/trackers/{hostTracker-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostTracker-id', in: 'path' },
    ],
    params,
  };
}
