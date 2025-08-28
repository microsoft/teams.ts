import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/appRoleAssignedResources': Operation<
    '/users/{user-id}/appRoleAssignedResources',
    'get'
  >;
  'GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}': Operation<
    '/users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/appRoleAssignedResources`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/appRoleAssignedResources']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/appRoleAssignedResources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appRoleAssignedResources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}
