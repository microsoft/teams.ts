import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments`
 *
 * Policy assignments
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
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
 * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
 *
 * Policy assignments
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    paramDefs: [
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
