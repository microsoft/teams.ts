import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
  'GET /filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules',
    'get'
  >;
  'GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'POST /filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules',
    'post'
  >;
}

/**
 * `DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filteringPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /filteringPolicies/{filteringPolicy-id}/policyRules`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function list(
  params?: IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/filteringPolicies/{filteringPolicy-id}/policyRules',
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
 * `GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function get(
  params?: IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
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
 * `PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['body'],
  params?: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'filteringPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /filteringPolicies/{filteringPolicy-id}/policyRules`
 *
 */
export function create(
  body: IEndpoints['POST /filteringPolicies/{filteringPolicy-id}/policyRules']['body'],
  params?: IEndpoints['POST /filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /filteringPolicies/{filteringPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/filteringPolicies/{filteringPolicy-id}/policyRules',
    paramDefs: [{ name: 'filteringPolicy-id', in: 'path' }],
    params,
    body,
  };
}
