export * as inheritsPermissionsFrom from './inheritsPermissionsFrom';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleDefinitions': Operation<
    '/roleManagement/directory/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleDefinitions': Operation<
    '/roleManagement/directory/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Delete a unifiedRoleDefinition object. You can&#x27;t delete built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license.
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/directory/roleDefinitions`
  *
  * Get a list of unifiedRoleDefinition objects for the provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra Entitlement Management)
  */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/directory/roleDefinitions']['response']> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleDefinitions',
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
 * `GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Read the properties and relationships of a unifiedRoleDefinition object. The following role-based access control (RBAC) providers are currently supported:
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Update the properties of a unifiedRoleDefinition object. You cannot update built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license.
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleDefinitions`
 *
 * Create a new custom unifiedRoleDefinition object. This feature requires a Microsoft Entra ID P1 or P2 license.
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/directory/roleDefinitions']['response']> {
  return {
    method: 'post',
    path: '/roleManagement/directory/roleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
