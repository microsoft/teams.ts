import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    'delete'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    'get'
  >;
  'PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    'patch'
  >;
}

/**
 * `DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject`
 *
 * Read-only. The subject associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [{ name: 'governanceRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
