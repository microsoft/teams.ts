export * as assignments from './assignments';
export * as selfActivate from './selfActivate';
export * as selfDeactivate from './selfDeactivate';
export * as settings from './settings';
export * as summary from './summary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    'delete'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    'patch'
  >;
}

/**
 * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
