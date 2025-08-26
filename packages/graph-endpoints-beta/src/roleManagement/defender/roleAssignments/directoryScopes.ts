import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes': Operation<
    '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes',
    'get'
  >;
  'GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}': Operation<
    '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes`
 *
 * Read-only collection that references the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}`
 *
 * Read-only collection that references the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
