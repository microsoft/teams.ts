import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}': Operation<
    '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    'delete'
  >;
  'GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes': Operation<
    '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
    'get'
  >;
  'GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}': Operation<
    '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    'get'
  >;
  'PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}': Operation<
    '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    'patch'
  >;
  'POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes': Operation<
    '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
      { name: 'appScope-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes`
 *
 * Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
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
 * `GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}`
 *
 * Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
      { name: 'appScope-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    paramDefs: [
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
      { name: 'appScope-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['body'],
  params?: IEndpoints['POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
    paramDefs: [{ name: 'unifiedRoleAssignmentMultiple-id', in: 'path' }],
    params,
    body,
  };
}
