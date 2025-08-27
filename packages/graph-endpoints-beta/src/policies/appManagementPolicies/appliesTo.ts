import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo`
 *
 * List application and service principal objects assigned an appManagementPolicy policy object.
 */
export function get(
  params?: IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}`
 *
 * Collection of application and service principals to which a policy is applied.
 */
export function get$1(
  params?: IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appManagementPolicy-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
