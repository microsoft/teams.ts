export * as assign from './assign';
export * as assignments from './assignments';
export * as scheduledActionsForRule from './scheduledActionsForRule';
export * as setScheduledActions from './setScheduledActions';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/compliancePolicies': Operation<
    '/deviceManagement/compliancePolicies',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/compliancePolicies': Operation<
    '/deviceManagement/compliancePolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies`
 *
 * List of all compliance policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/compliancePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies',
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
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}`
 *
 * List of all compliance policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    paramDefs: [{ name: 'deviceManagementCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/compliancePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/compliancePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies',
    paramDefs: [],
    params,
    body,
  };
}
