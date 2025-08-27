import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
    'post'
  >;
}

/**
 * `POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['body'],
  params?: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
    paramDefs: [{ name: 'governanceRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
