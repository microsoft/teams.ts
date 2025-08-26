import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting`
 *
 * The associated role setting for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
