import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals`
 *
 * Read-only collection that references the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals',
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
 * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}`
 *
 * Read-only collection that references the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
