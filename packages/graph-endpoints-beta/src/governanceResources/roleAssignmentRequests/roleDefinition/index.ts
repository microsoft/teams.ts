export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'patch'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 * Read-only. The role definition that the request aims to.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: [
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
