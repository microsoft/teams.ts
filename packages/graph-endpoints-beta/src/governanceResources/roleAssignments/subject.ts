import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'patch'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
 *
 * Read-only. The subject associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
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
 * `PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    paramDefs: [
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
