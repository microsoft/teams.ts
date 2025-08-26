import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting`
 *
 * The associated role setting for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}
