import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies`
 *
 * The appManagementPolicy applied to this application.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}`
 *
 * The appManagementPolicy applied to this application.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'appManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}
