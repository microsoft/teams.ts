import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    'post'
  >;
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    paramDefs: [
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
