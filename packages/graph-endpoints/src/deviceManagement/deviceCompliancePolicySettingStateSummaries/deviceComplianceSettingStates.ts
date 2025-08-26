import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}`
 *
 * Deletes a deviceComplianceSettingState.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
      { name: 'deviceComplianceSettingState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates`
 *
 * List properties and relationships of the deviceComplianceSettingState objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}`
 *
 * Read properties and relationships of the deviceComplianceSettingState object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
      { name: 'deviceComplianceSettingState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}`
 *
 * Update the properties of a deviceComplianceSettingState object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    paramDefs: [
      { name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' },
      { name: 'deviceComplianceSettingState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates`
 *
 * Create a new deviceComplianceSettingState object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
    paramDefs: [{ name: 'deviceCompliancePolicySettingStateSummary-id', in: 'path' }],
    params,
    body,
  };
}
