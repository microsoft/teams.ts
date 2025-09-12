export * as buckets from './buckets';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /me/planner/plans': Operation<'/me/planner/plans', 'get'>;
  'GET /me/planner/plans/{plannerPlan-id}': Operation<'/me/planner/plans/{plannerPlan-id}', 'get'>;
  'PATCH /me/planner/plans/{plannerPlan-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /me/planner/plans': Operation<'/me/planner/plans', 'post'>;
  'GET /me/planner/plans/{plannerPlan-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
  'DELETE /me/planner/plans/{plannerPlan-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerPlan-id'],
    },
    params,
  };
}

/**
 * `GET /me/planner/plans`
 *
 * Retrieve a list of plannerplan objects shared with a user object.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans']['response']> {
  return {
    method: 'get',
    path: '/me/planner/plans',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['plannerPlan-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['plannerPlan-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/plans']['body']
): EndpointRequest<IEndpoints['POST /me/planner/plans']['response']> {
  return {
    method: 'post',
    path: '/me/planner/plans',
    body,
  };
}

export const details = {
  /**
   * `GET /me/planner/plans/{plannerPlan-id}/details`
   *
   * Read-only. Nullable. Extra details about the plan.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      method: 'get',
      path: '/me/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/plans/{plannerPlan-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/details']['body'],
    params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      method: 'patch',
      path: '/me/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/plans/{plannerPlan-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      method: 'delete',
      path: '/me/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
};
