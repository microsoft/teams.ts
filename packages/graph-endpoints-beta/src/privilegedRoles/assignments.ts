import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /privilegedRoles/{privilegedRole-id}/assignments': Operation<
    '/privilegedRoles/{privilegedRole-id}/assignments',
    'get'
  >;
  'GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}',
    'get'
  >;
}

/**
 * `GET /privilegedRoles/{privilegedRole-id}/assignments`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles/{privilegedRole-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRole-id', in: 'path' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
