import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'assignmentFilterEvaluationStatusDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
 *
 * Managed device mobile app configuration states for this device.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
 *
 * Managed device mobile app configuration states for this device.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'assignmentFilterEvaluationStatusDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'assignmentFilterEvaluationStatusDetails-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
