export * as scheduledActionConfigurations from './scheduledActionConfigurations';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}',
    'delete'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}',
    'patch'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementComplianceScheduledActionForRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule`
 *
 * The list of scheduled action for this rule
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule',
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
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}`
 *
 * The list of scheduled action for this rule
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementComplianceScheduledActionForRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}',
    paramDefs: [
      { name: 'deviceManagementCompliancePolicy-id', in: 'path' },
      { name: 'deviceManagementComplianceScheduledActionForRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule',
    paramDefs: [{ name: 'deviceManagementCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
