export * as buckets from './buckets';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /groups/{group-id}/planner/plans': Operation<'/groups/{group-id}/planner/plans', 'get'>;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /groups/{group-id}/planner/plans': Operation<'/groups/{group-id}/planner/plans', 'post'>;
  'GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
  'DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'plannerPlan-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans`
 *
 * Retrieve a list of plannerPlan objects owned by a group object.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/planner/plans']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/planner/plans',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans owned by the group.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['group-id', 'plannerPlan-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['group-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/planner/plans']['body'],
  params?: IEndpoints['POST /groups/{group-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/planner/plans']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/planner/plans',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const details = {
  /**
   * `GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details`
   *
   * Read-only. Nullable. Extra details about the plan.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'plannerPlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};
