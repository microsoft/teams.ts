import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/settingDefinitions': Operation<
    '/deviceManagement/settingDefinitions',
    'get'
  >;
  'GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/settingDefinitions': Operation<
    '/deviceManagement/settingDefinitions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/settingDefinitions`
 *
 * The device management intent setting definitions
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/settingDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/settingDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/settingDefinitions',
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
 * `GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 * The device management intent setting definitions
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [{ name: 'deviceManagementSettingDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/settingDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/settingDefinitions']['body'],
  params?: IEndpoints['POST /deviceManagement/settingDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/settingDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/settingDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
