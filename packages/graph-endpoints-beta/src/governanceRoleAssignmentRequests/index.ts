export * as cancel from './cancel';
export * as resource from './resource';
export * as roleDefinition from './roleDefinition';
export * as subject from './subject';
export * as updateRequest from './updateRequest';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /governanceRoleAssignmentRequests': Operation<'/governanceRoleAssignmentRequests', 'get'>;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /governanceRoleAssignmentRequests': Operation<'/governanceRoleAssignmentRequests', 'post'>;
}

/**
 * `DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleAssignmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests',
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
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: [{ name: 'governanceRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /governanceRoleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleAssignmentRequests']['body'],
  params?: IEndpoints['POST /governanceRoleAssignmentRequests']['parameters']
): EndpointRequest<IEndpoints['POST /governanceRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleAssignmentRequests',
    paramDefs: [],
    params,
    body,
  };
}
