export * as policyRules from './policyRules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    'delete'
  >;
  'GET /networkAccess/tlsInspectionPolicies': Operation<
    '/networkAccess/tlsInspectionPolicies',
    'get'
  >;
  'GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    'patch'
  >;
  'POST /networkAccess/tlsInspectionPolicies': Operation<
    '/networkAccess/tlsInspectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}`
 *
 * Delete a tlsInspectionPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tlsInspectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/tlsInspectionPolicies`
 *
 * Get a list of the tlsInspectionPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/tlsInspectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tlsInspectionPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}`
 *
 * Get a tlsInspectionPolicy object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tlsInspectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}`
 *
 * Update the properties of a tlsInspectionPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    paramDefs: [{ name: 'tlsInspectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/tlsInspectionPolicies`
 *
 * Create a new tlsInspectionPolicy object.
 */
export function create(
  body: IEndpoints['POST /networkAccess/tlsInspectionPolicies']['body'],
  params?: IEndpoints['POST /networkAccess/tlsInspectionPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/tlsInspectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/tlsInspectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
