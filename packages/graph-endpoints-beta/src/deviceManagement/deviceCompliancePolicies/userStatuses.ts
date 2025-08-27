import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses`
 *
 * List of DeviceComplianceUserStatus.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
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
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}`
 *
 * List of DeviceComplianceUserStatus.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    paramDefs: [
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceComplianceUserStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
