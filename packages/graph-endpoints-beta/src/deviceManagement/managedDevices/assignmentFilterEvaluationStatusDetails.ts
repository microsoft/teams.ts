import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'assignmentFilterEvaluationStatusDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
 *
 * Managed device mobile app configuration states for this device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
 *
 * Managed device mobile app configuration states for this device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'assignmentFilterEvaluationStatusDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'assignmentFilterEvaluationStatusDetails-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
