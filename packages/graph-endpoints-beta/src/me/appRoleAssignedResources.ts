import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/appRoleAssignedResources': Operation<'/me/appRoleAssignedResources', 'get'>;
  'GET /me/appRoleAssignedResources/{servicePrincipal-id}': Operation<
    '/me/appRoleAssignedResources/{servicePrincipal-id}',
    'get'
  >;
}

/**
 * `GET /me/appRoleAssignedResources`
 *
 * Get the service principals to which the user has an app role assignment either directly or through group membership.
 */
export function list(
  params?: IEndpoints['GET /me/appRoleAssignedResources']['parameters']
): EndpointRequest<IEndpoints['GET /me/appRoleAssignedResources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appRoleAssignedResources',
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
 * `GET /me/appRoleAssignedResources/{servicePrincipal-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/appRoleAssignedResources/{servicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appRoleAssignedResources/{servicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appRoleAssignedResources/{servicePrincipal-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}
