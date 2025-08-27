import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary': Operation<
    '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary': Operation<
    '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary': Operation<
    '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary`
 *
 * Read properties and relationships of the deviceCompliancePolicyDeviceStateSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary`
 *
 * Update the properties of a deviceCompliancePolicyDeviceStateSummary object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    paramDefs: [],
    params,
    body,
  };
}
