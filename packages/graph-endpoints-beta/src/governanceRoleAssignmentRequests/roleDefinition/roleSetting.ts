import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting`
 *
 * The associated role setting for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}
