export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'patch'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 * Read-only. The role definition associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
