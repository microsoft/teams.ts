import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments`
 *
 * Policy assignments
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
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
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
 *
 * Policy assignments
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    paramDefs: [
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
    paramDefs: [{ name: 'deviceManagementCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
