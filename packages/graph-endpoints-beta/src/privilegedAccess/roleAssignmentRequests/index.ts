export * as cancel from './cancel';
export * as resource from './resource';
export * as roleDefinition from './roleDefinition';
export * as subject from './subject';
export * as updateRequest from './updateRequest';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests',
    'post'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests`
 *
 * A collection of role assignment requests for the provider.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests',
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
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 * A collection of role assignment requests for the provider.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests',
    paramDefs: [{ name: 'privilegedAccess-id', in: 'path' }],
    params,
    body,
  };
}
