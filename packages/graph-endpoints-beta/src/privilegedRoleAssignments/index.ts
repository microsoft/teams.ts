export * as makeEligible from './makeEligible';
export * as makePermanent from './makePermanent';
export * as roleInfo from './roleInfo';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    'delete'
  >;
  'GET /privilegedRoleAssignments': Operation<'/privilegedRoleAssignments', 'get'>;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    'patch'
  >;
  'POST /privilegedRoleAssignments': Operation<'/privilegedRoleAssignments', 'post'>;
}

/**
 * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments',
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
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    paramDefs: [{ name: 'privilegedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privilegedRoleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignments']['body'],
  params?: IEndpoints['POST /privilegedRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
