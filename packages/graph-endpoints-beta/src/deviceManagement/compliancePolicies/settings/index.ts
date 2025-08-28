export * as settingDefinitions from './settingDefinitions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings`
 *
 * Policy settings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 * Policy settings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings',
    paramDefs: [{ name: 'deviceManagementCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
