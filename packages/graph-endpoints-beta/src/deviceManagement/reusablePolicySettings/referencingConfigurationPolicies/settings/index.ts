export * as settingDefinitions from './settingDefinitions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    'get'
  >;
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings`
 *
 * Policy settings
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 * Policy settings
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}',
    paramDefs: [
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['body'],
  params?: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings',
    paramDefs: [
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
