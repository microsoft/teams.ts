import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}`
 *
 * Deletes a deviceComplianceDeviceStatus.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceDeviceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses`
 *
 * List properties and relationships of the deviceComplianceDeviceStatus objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
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
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}`
 *
 * Read properties and relationships of the deviceComplianceDeviceStatus object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceDeviceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}`
 *
 * Update the properties of a deviceComplianceDeviceStatus object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    paramDefs: [
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceDeviceStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses`
 *
 * Create a new deviceComplianceDeviceStatus object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
