export * as inheritsPermissionsFrom from './inheritsPermissionsFrom';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    paramDefs: [{ name: 'rbacApplication-id', in: 'path' }],
    params,
    body,
  };
}
