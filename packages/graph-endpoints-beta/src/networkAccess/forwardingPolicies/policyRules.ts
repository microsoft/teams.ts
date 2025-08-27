import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
  'GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
    'get'
  >;
  'GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'forwardingPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'forwardingPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'forwardingPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}`
 *
 * Update an existing forwarding rule within a forwarding policy.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'forwardingPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['body'],
  params?: IEndpoints['POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
    paramDefs: [{ name: 'forwardingPolicy-id', in: 'path' }],
    params,
    body,
  };
}
