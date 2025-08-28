import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
    'get'
  >;
  'GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions`
 *
 * The setting definitions this category contains
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 * The setting definitions this category contains
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: 'deviceManagementSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['body'],
  params?: IEndpoints['POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}/settingDefinitions',
    paramDefs: [{ name: 'deviceManagementSettingCategory-id', in: 'path' }],
    params,
    body,
  };
}
