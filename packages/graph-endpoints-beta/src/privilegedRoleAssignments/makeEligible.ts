import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
