import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
