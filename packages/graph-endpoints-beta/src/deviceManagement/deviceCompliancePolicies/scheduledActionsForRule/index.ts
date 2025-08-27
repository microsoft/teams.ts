export * as scheduledActionConfigurations from './scheduledActionConfigurations';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceScheduledActionForRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule`
 *
 * The list of scheduled action for this rule
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}`
 *
 * The list of scheduled action for this rule
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceScheduledActionForRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    paramDefs: [
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceScheduledActionForRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
