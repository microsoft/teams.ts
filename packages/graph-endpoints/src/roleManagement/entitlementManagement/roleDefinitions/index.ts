export * as inheritsPermissionsFrom from './inheritsPermissionsFrom';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleDefinitions': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/entitlementManagement/roleDefinitions`
  *
  * Get a list of unifiedRoleDefinition objects for the provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra Entitlement Management)
  */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions',
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
 * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
