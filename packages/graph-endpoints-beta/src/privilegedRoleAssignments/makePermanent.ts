import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent',
    'post'
  >;
}

/**
 * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
