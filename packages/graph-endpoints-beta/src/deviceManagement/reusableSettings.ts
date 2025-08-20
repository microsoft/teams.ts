import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/reusableSettings': Operation<'/deviceManagement/reusableSettings', 'get'>;
  'GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/reusableSettings': Operation<
    '/deviceManagement/reusableSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reusableSettings`
 *
 * List of all reusable settings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reusableSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/reusableSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusableSettings',
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
 * `GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 * List of all reusable settings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationSettingDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reusableSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusableSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/reusableSettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reusableSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusableSettings',
    paramDefs: [],
    params,
    body,
  };
}
