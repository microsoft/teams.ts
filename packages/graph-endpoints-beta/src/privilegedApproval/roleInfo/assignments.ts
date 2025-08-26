import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments',
    'get'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}',
    'get'
  >;
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
