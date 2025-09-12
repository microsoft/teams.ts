export * as buckets from './buckets';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/plans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/plans': Operation<'/users/{user-id}/planner/plans', 'get'>;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/plans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/plans': Operation<'/users/{user-id}/planner/plans', 'post'>;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
  'DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'plannerPlan-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/plans']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/planner/plans',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['user-id', 'plannerPlan-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['user-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/plans']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/planner/plans']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/planner/plans',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const details = {
  /**
   * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/details`
   *
   * Read-only. Nullable. Extra details about the plan.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};
