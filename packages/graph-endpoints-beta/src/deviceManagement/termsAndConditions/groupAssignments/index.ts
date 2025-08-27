export * as termsAndConditions from './termsAndConditions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments',
    'get'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments`
 *
 * The list of group assignments for this T&amp;C policy.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}`
 *
 * The list of group assignments for this T&amp;C policy.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}',
    paramDefs: [
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsGroupAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments',
    paramDefs: [{ name: 'termsAndConditions-id', in: 'path' }],
    params,
    body,
  };
}
