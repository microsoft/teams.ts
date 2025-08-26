import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
    'get'
  >;
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource`
 *
 * Read-only. The associated resource for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
