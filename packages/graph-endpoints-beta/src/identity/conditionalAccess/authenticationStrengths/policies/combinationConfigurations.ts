import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
 *
 * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
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
 * `GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
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
 * `PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    paramDefs: [
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
      { name: 'authenticationCombinationConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}
