import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo`
 *
 * Get a list of directoryObject objects that a homeRealmDiscoveryPolicy object has been applied to.
 */
export function get(
  params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo']['response']
> {
  return {
    method: 'get',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'homeRealmDiscoveryPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'homeRealmDiscoveryPolicy-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
