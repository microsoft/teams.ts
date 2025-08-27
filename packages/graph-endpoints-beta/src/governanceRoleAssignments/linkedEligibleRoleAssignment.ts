import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
    'get'
  >;
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment`
 *
 * Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
