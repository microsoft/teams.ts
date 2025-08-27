export * as linkedEligibleRoleAssignment from './linkedEligibleRoleAssignment';
export * as resource from './resource';
export * as roleDefinition from './roleDefinition';
export * as subject from './subject';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    'delete'
  >;
  'GET /governanceRoleAssignments': Operation<'/governanceRoleAssignments', 'get'>;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    'get'
  >;
  'PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    'patch'
  >;
  'POST /governanceRoleAssignments': Operation<'/governanceRoleAssignments', 'post'>;
}

/**
 * `DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleAssignments`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments',
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
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    paramDefs: [{ name: 'governanceRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /governanceRoleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleAssignments']['body'],
  params?: IEndpoints['POST /governanceRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /governanceRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
