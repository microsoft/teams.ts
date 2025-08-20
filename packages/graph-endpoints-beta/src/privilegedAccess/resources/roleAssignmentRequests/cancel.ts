import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    'post'
  >;
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
