export * as settingDefinitions from './settingDefinitions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    'get'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings`
 *
 * Policy settings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 * Policy settings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
