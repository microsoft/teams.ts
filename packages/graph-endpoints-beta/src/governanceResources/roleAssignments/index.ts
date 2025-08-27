export * as linkedEligibleRoleAssignment from './linkedEligibleRoleAssignment';
export * as resource from './resource';
export * as roleDefinition from './roleDefinition';
export * as subject from './subject';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    'patch'
  >;
  'POST /governanceResources/{governanceResource-id}/roleAssignments': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments',
    'post'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignments`
 *
 * The collection of role assignments for the resource.
 */
export function list(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 * The collection of role assignments for the resource.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignments']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleAssignments',
    paramDefs: [{ name: 'governanceResource-id', in: 'path' }],
    params,
    body,
  };
}
