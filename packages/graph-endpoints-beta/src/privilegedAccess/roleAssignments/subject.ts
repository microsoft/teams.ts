import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'patch'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
 *
 * Read-only. The subject associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
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
 * `PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
