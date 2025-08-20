import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/homeRealmDiscoveryPolicies': Operation<
    '/applications/{application-id}/homeRealmDiscoveryPolicies',
    'get'
  >;
  'GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/homeRealmDiscoveryPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/homeRealmDiscoveryPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
      { name: 'homeRealmDiscoveryPolicy-id', in: 'path' },
    ],
    params,
  };
}
