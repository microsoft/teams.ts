export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'patch'
  >;
}

/**
 * `DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 * Read-only. The role definition that the request aims to.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: [{ name: 'governanceRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
