import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 * Delete an authenticationCombinationConfiguration  for a custom authenticationStrengthPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
 *
 * Get the authenticationCombinationConfiguration objects for an authentication strength policy. The objects can be of one or more of the following derived types:
 * fido2combinationConfigurations
 * x509certificatecombinationconfiguration authenticationCombinationConfiguration objects are supported only for custom authentication strengths.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
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
 * `GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 * Read the properties and relationships of an authenticationCombinationConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
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
  * `PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
  *
  * Update the properties of an authenticationCombinationConfiguration object. 
The properties can be for one of the following derived types:
* fido2combinationConfigurations
* x509certificatecombinationconfiguration
  */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
 *
 * Create a new authenticationCombinationConfiguration object which can be of one of the following derived types:
 * fido2combinationConfiguration
 * x509certificatecombinationconfiguration
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
> {
  return {
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}
