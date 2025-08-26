import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies',
    'get'
  >;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'get'
  >;
}

/**
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies`
 *
 * A set of associated policies defined to regulate access to resources or systems based on specific conditions. Automatically expanded.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 * A set of associated policies defined to regulate access to resources or systems based on specific conditions. Automatically expanded.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringProfile-id', in: 'path' },
      { name: 'conditionalAccessPolicy-id', in: 'path' },
    ],
    params,
  };
}
