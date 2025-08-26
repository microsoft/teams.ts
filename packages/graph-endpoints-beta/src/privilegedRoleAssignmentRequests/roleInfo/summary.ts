import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
