export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceSettingStateSummaries from './deviceSettingStateSummaries';
export * as deviceStatusOverview from './deviceStatusOverview';
export * as deviceStatuses from './deviceStatuses';
export * as scheduleActionsForRules from './scheduleActionsForRules';
export * as scheduledActionsForRule from './scheduledActionsForRule';
export * as userStatusOverview from './userStatusOverview';
export * as userStatuses from './userStatuses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies': Operation<
    '/deviceManagement/deviceCompliancePolicies',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies': Operation<
    '/deviceManagement/deviceCompliancePolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}`
 *
 * Deletes a windows10MobileCompliancePolicy.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies`
 *
 * List properties and relationships of the iosCompliancePolicy objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceCompliancePolicies']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies',
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
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}`
 *
 * Read properties and relationships of the deviceCompliancePolicy object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}`
 *
 * Update the properties of a iosCompliancePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies`
 *
 * Create a new windows81CompliancePolicy object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceCompliancePolicies']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies',
    paramDefs: [],
    params,
    body,
  };
}
