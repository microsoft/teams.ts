export * as assign from './assign';
export * as assignments from './assignments';
export * as clearEnrollmentTimeDeviceMembershipTarget from './clearEnrollmentTimeDeviceMembershipTarget';
export * as createCopy from './createCopy';
export * as reorder from './reorder';
export * as retrieveEnrollmentTimeDeviceMembershipTarget from './retrieveEnrollmentTimeDeviceMembershipTarget';
export * as setEnrollmentTimeDeviceMembershipTarget from './setEnrollmentTimeDeviceMembershipTarget';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies',
    'get'
  >;
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies`
 *
 * configuration policies referencing the current reusable setting. This property is read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies',
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
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 * configuration policies referencing the current reusable setting. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: [
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies',
    paramDefs: [{ name: 'deviceManagementReusablePolicySetting-id', in: 'path' }],
    params,
    body,
  };
}
