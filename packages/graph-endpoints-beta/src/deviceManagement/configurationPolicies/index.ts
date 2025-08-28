export * as assign from './assign';
export * as assignments from './assignments';
export * as clearEnrollmentTimeDeviceMembershipTarget from './clearEnrollmentTimeDeviceMembershipTarget';
export * as createCopy from './createCopy';
export * as reorder from './reorder';
export * as retrieveEnrollmentTimeDeviceMembershipTarget from './retrieveEnrollmentTimeDeviceMembershipTarget';
export * as setEnrollmentTimeDeviceMembershipTarget from './setEnrollmentTimeDeviceMembershipTarget';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationPolicies': Operation<
    '/deviceManagement/configurationPolicies',
    'get'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationPolicies': Operation<
    '/deviceManagement/configurationPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicies`
 *
 * List of all Configuration policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/configurationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies',
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
 * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 * List of all Configuration policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/configurationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies',
    paramDefs: [],
    params,
    body,
  };
}
