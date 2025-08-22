export * as deviceComplianceSettingStates from './deviceComplianceSettingStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicySettingStateSummaries': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 * Deletes a deviceCompliancePolicySettingStateSummary.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries`
 *
 * List properties and relationships of the deviceCompliancePolicySettingStateSummary objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
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
 * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 * Read properties and relationships of the deviceCompliancePolicySettingStateSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 * Update the properties of a deviceCompliancePolicySettingStateSummary object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: [{ name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicySettingStateSummaries`
 *
 * Create a new deviceCompliancePolicySettingStateSummary object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    paramDefs: [],
    params,
    body,
  };
}
