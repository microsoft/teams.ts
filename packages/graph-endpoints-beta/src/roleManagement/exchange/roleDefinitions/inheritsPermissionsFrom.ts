import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'delete'
  >;
  'GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'get'
  >;
  'GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'get'
  >;
  'PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'patch'
  >;
  'POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
 *
 * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles support this attribute.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
 *
 * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles support this attribute.
 * @deprecated
 */
export function get$1(
  params?: IEndpoints['GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    paramDefs: [
      { name: 'unifiedRoleDefinition-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['body'],
  params?: IEndpoints['POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}
