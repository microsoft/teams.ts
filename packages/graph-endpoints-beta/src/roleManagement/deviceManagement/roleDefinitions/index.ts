export * as inheritsPermissionsFrom from './inheritsPermissionsFrom';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/deviceManagement/roleDefinitions': Operation<
    '/roleManagement/deviceManagement/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/deviceManagement/roleDefinitions': Operation<
    '/roleManagement/deviceManagement/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement/roleDefinitions`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/deviceManagement/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/deviceManagement/roleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/roleDefinitions',
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
 * `GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/deviceManagement/roleDefinitions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/deviceManagement/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/deviceManagement/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/deviceManagement/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/deviceManagement/roleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
