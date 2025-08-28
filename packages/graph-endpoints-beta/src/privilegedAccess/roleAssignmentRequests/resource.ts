import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    'get'
  >;
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource`
 *
 * Read-only. The resource that the request aims to.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}
