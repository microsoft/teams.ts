export * as linkedEligibleRoleAssignment from './linkedEligibleRoleAssignment';
export * as resource from './resource';
export * as roleDefinition from './roleDefinition';
export * as subject from './subject';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/roleAssignments': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    'post'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments`
 *
 * A collection of role assignments for the provider.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 * A collection of role assignments for the provider.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/roleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignments']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    paramDefs: [{ name: 'privilegedAccess-id', in: 'path' }],
    params,
    body,
  };
}
