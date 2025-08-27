import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
