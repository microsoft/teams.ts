import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    'post'
  >;
}

/**
 * `POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['body'],
  params?: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    paramDefs: [{ name: 'governanceRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
