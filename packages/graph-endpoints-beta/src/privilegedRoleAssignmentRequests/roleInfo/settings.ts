import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
