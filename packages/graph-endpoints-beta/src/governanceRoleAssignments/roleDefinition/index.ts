export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'patch'
  >;
}

/**
 * `DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 * Read-only. The role definition associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: [{ name: 'governanceRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
