export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    'delete'
  >;
  'GET /policies/tokenIssuancePolicies': Operation<'/policies/tokenIssuancePolicies', 'get'>;
  'GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    'get'
  >;
  'PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    'patch'
  >;
  'POST /policies/tokenIssuancePolicies': Operation<'/policies/tokenIssuancePolicies', 'post'>;
}

/**
 * `DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}`
 *
 * Delete a tokenIssuancePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tokenIssuancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/tokenIssuancePolicies`
 *
 * Get a list of tokenIssuancePolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/tokenIssuancePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/tokenIssuancePolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/tokenIssuancePolicies',
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
 * `GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}`
 *
 * The policy that specifies the characteristics of SAML tokens issued by Microsoft Entra ID.
 */
export function get(
  params?: IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tokenIssuancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}`
 *
 * Update the properties of a tokenIssuancePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    paramDefs: [{ name: 'tokenIssuancePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/tokenIssuancePolicies`
 *
 * Create a new tokenIssuancePolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/tokenIssuancePolicies']['body'],
  params?: IEndpoints['POST /policies/tokenIssuancePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/tokenIssuancePolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/tokenIssuancePolicies',
    paramDefs: [],
    params,
    body,
  };
}
