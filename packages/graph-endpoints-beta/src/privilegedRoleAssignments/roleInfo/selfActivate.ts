import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
