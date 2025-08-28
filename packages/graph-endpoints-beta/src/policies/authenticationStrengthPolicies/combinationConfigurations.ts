import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'delete'
  >;
  'GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'get'
  >;
  'GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'get'
  >;
  'PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'patch'
  >;
  'POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'post'
  >;
}

/**
 * `DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations`
 *
 * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
 */
export function list(
  params?: IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['body'],
  params?: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}
