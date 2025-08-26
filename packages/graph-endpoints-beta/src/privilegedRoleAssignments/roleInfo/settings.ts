import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    'delete'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
