export * as buckets from './buckets';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}': Operation<'/planner/plans/{plannerPlan-id}', 'delete'>;
  'GET /planner/plans': Operation<'/planner/plans', 'get'>;
  'GET /planner/plans/{plannerPlan-id}': Operation<'/planner/plans/{plannerPlan-id}', 'get'>;
  'PATCH /planner/plans/{plannerPlan-id}': Operation<'/planner/plans/{plannerPlan-id}', 'patch'>;
  'POST /planner/plans': Operation<'/planner/plans', 'post'>;
  'GET /planner/plans/{plannerPlan-id}/details': Operation<
    '/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /planner/plans/{plannerPlan-id}/details': Operation<
    '/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
  'DELETE /planner/plans/{plannerPlan-id}/details': Operation<
    '/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}`
 *
 * Delete a plannerPlan object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerPlan-id'],
    },
    params,
  };
}

/**
 * `GET /planner/plans`
 *
 * Get a list of plannerPlan objects.
 */
export function list(
  params?: IEndpoints['GET /planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /planner/plans']['response']> {
  return {
    method: 'get',
    path: '/planner/plans',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}`
 *
 * Retrieve the properties and relationships of a plannerplan object.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['plannerPlan-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /planner/plans/{plannerPlan-id}`
 *
 * Update the properties of a plannerPlan object.
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['plannerPlan-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /planner/plans`
 *
 * Create a new plannerPlan object.
 */
export function create(
  body: IEndpoints['POST /planner/plans']['body']
): EndpointRequest<IEndpoints['POST /planner/plans']['response']> {
  return {
    method: 'post',
    path: '/planner/plans',
    body,
  };
}

export const details = {
  /**
   * `GET /planner/plans/{plannerPlan-id}/details`
   *
   * Retrieve the properties and relationships of a plannerPlanDetails object.
   */
  list: function list(
    params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['GET /planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      method: 'get',
      path: '/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /planner/plans/{plannerPlan-id}/details`
   *
   * Update the properties of plannerplandetails object.
   */
  update: function update(
    body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/details']['body'],
    params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      method: 'patch',
      path: '/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /planner/plans/{plannerPlan-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      method: 'delete',
      path: '/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
};
