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
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['termsAndConditions-id', 'termsAndConditionsGroupAssignment-id'],
    },
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
    paramDefs: {
      path: ['termsAndConditions-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['termsAndConditions-id', 'termsAndConditionsGroupAssignment-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['termsAndConditions-id', 'termsAndConditionsGroupAssignment-id'],
    },
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
    paramDefs: {
      path: ['termsAndConditions-id'],
    },
    params,
    body,
  };
}

export const termsAndConditions = {
  /**
   * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions`
   *
   * Navigation link to the terms and conditions that are assigned.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['termsAndConditions-id', 'termsAndConditionsGroupAssignment-id'],
      },
      params,
    };
  },
};
