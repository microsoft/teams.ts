import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    'get'
  >;
}

/**
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource`
 *
 * Read-only. The resource that the request aims to.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}
