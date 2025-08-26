import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/complianceSettings': Operation<
    '/deviceManagement/complianceSettings',
    'get'
  >;
  'GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/complianceSettings': Operation<
    '/deviceManagement/complianceSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/complianceSettings`
 *
 * List of all ComplianceSettings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/complianceSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/complianceSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/complianceSettings',
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
 * `GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 * List of all ComplianceSettings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/complianceSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/complianceSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/complianceSettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/complianceSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/complianceSettings',
    paramDefs: [],
    params,
    body,
  };
}
