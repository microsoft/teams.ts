import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}`
 *
 * Deletes an appRoleAssignment that a user, group, or client service principal has been granted for a resource service principal.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo`
 *
 * Read the properties and relationships of an appRoleAssignment object.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
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
 * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}`
 *
 * Read the properties and relationships of an appRoleAssignment object.
 */
export function get$1(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo`
 *
 * Assign an app role for a resource service principal, to a user, group, or client service principal. App roles that are assigned to service principals are also known as application permissions. Application permissions can be granted directly with app role assignments, or through a consent experience. To grant an app role assignment, you need three identifiers:
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignedTo',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
