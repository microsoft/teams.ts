import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    'get'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    'patch'
  >;
  'POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    'post'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['termsAndConditions-id', 'termsAndConditionsAcceptanceStatus-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses`
 *
 * The list of acceptance statuses for this T&amp;C policy.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    paramDefs: {
      path: ['termsAndConditions-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}`
 *
 * The list of acceptance statuses for this T&amp;C policy.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    paramDefs: {
      path: ['termsAndConditions-id', 'termsAndConditionsAcceptanceStatus-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    paramDefs: {
      path: ['termsAndConditions-id', 'termsAndConditionsAcceptanceStatus-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    paramDefs: {
      path: ['termsAndConditions-id'],
    },
    params,
    body,
  };
}

export const termsAndConditions = {
  /**
   * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions`
   *
   * Navigation link to the terms and conditions that are assigned.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['termsAndConditions-id', 'termsAndConditionsAcceptanceStatus-id'],
      },
      params,
    };
  },
};
