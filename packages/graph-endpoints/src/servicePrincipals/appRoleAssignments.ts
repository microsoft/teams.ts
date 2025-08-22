import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments': Operation<
    '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Deletes an appRoleAssignment that a service principal has been granted. App roles which are assigned to service principals are also known as application permissions. Deleting an app role assignment for a service principal is equivalent to revoking the app-only permission grant.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments`
 *
 * Read the properties and relationships of an appRoleAssignment object.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 * Read the properties and relationships of an appRoleAssignment object.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
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
 * `PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments/{appRoleAssignment-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'appRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments`
 *
 * Assign an app role to a client service principal. App roles that are assigned to service principals are also known as application permissions. Application permissions can be granted directly with app role assignments, or through a consent experience. To grant an app role assignment to a client service principal, you need three identifiers:
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/appRoleAssignments']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/appRoleAssignments',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
