import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationSettings': Operation<
    '/deviceManagement/configurationSettings',
    'get'
  >;
  'GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationSettings': Operation<
    '/deviceManagement/configurationSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationSettings`
 *
 * List of all ConfigurationSettings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/configurationSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationSettings',
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
 * `GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 * List of all ConfigurationSettings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationSettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/configurationSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationSettings',
    paramDefs: [],
    params,
    body,
  };
}
