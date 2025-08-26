import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
  'GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
    'get'
  >;
  'GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}`
 *
 * Delete a tlsInspectionRule object.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tlsInspectionPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules`
 *
 * Get a list of the tlsInspectionRule objects in a tlsInspectionPolicy.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tlsInspectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}`
 *
 * Get a tlsInspectionRule object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tlsInspectionPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}`
 *
 * Update the properties of a tlsInspectionRule object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    paramDefs: [
      { name: 'tlsInspectionPolicy-id', in: 'path' },
      { name: 'policyRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules`
 *
 * Create a new tlsInspectionRule object in a tlsInspectionPolicy.
 */
export function create(
  body: IEndpoints['POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['body'],
  params?: IEndpoints['POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
    paramDefs: [{ name: 'tlsInspectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}
