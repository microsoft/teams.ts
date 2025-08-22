import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo']['response']
> {
  return {
    method: 'get',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'activityBasedTimeoutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'activityBasedTimeoutPolicy-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
