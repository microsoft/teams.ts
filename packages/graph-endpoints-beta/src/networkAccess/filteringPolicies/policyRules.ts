import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
  'GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
    'get'
  >;
  'GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filteringPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'filteringPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['body'],
  params?: IEndpoints['POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
    paramDefs: [{ name: 'filteringPolicy-id', in: 'path' }],
    params,
    body,
  };
}
