import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/resource',
    'get'
  >;
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource`
 *
 * Read-only. The resource associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
