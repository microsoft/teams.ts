export * as cancel from './cancel';
export * as roleInfo from './roleInfo';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests': Operation<'/privilegedRoleAssignmentRequests', 'get'>;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /privilegedRoleAssignmentRequests': Operation<'/privilegedRoleAssignmentRequests', 'post'>;
}

/**
 * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    paramDefs: [{ name: 'privilegedRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privilegedRoleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignmentRequests']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignmentRequests']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignmentRequests',
    paramDefs: [],
    params,
    body,
  };
}
