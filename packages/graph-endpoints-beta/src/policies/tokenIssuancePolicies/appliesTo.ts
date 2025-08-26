import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo`
 *
 * Get a list of directoryObject objects that a tokenIssuancePolicy object has been applied to. The tokenIssuancePolicy can only be applied to application and servicePrincipal resources.
 */
export function get(
  params?: IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tokenIssuancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tokenIssuancePolicy-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
