import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
