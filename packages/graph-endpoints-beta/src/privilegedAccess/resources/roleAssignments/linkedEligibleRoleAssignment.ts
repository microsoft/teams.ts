import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
    'get'
  >;
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment`
 *
 * Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
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
