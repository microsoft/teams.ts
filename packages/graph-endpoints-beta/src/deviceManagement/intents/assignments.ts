import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments`
 *
 * Collection of assignments
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}`
 *
 * Collection of assignments
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments/{deviceManagementIntentAssignment-id}',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/assignments',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
