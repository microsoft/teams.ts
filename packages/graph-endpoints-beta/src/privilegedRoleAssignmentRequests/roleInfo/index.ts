export * as assignments from './assignments';
export * as selfActivate from './selfActivate';
export * as selfDeactivate from './selfDeactivate';
export * as settings from './settings';
export * as summary from './summary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
