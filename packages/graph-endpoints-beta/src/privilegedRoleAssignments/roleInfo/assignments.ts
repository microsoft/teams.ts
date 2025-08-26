import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments',
    'get'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}',
    'get'
  >;
}

/**
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
      { name: 'privilegedRoleAssignment-id1', in: 'path' },
    ],
    params,
  };
}
