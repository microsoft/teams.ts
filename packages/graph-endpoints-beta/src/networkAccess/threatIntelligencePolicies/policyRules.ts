import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
  'GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
    'get'
  >;
  'GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'threatIntelligencePolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatIntelligencePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}`
 *
 * Represents the definition of the policy ruleset that makes up the core definition of a policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatIntelligencePolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'threatIntelligencePolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['body'],
  params?: IEndpoints['POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
    paramDefs: [{ name: 'threatIntelligencePolicy-id', in: 'path' }],
    params,
    body,
  };
}
