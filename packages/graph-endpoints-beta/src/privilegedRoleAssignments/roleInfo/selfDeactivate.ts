import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
