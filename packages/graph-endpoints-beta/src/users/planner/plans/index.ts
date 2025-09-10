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
  'POST /users/{user-id}/planner/plans/{plannerPlan-id}/archive': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/archive',
    'post'
  >;
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
  'POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
  'POST /users/{user-id}/planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/unarchive',
    'post'
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
    ver: 'beta',
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
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/plans']['response']> {
  return {
    ver: 'beta',
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
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/plans',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /users/{user-id}/planner/plans/{plannerPlan-id}/archive`
   *
   * Archive a plannerPlan object. Archiving a plan, also archives the plannerTasks and plannerBuckets in the plan.  An archived entity is read-only. Archived entities cannot be updated. An archived plan can be unarchived.  All archived entities can be deleted. Archived tasks are not included in the response for list of tasks assigned to a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/archive']['body'],
    params?: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/archive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/planner/plans/{plannerPlan-id}/archive',
      paramDefs: {
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const details = {
  /**
   * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/details`
   *
   * Extra details about the plan. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const moveToContainer = {
  /**
   * `POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer`
   *
   * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
    params?: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/planner/plans/{plannerPlan-id}/moveToContainer',
      paramDefs: {
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const unarchive = {
  /**
   * `POST /users/{user-id}/planner/plans/{plannerPlan-id}/unarchive`
   *
   * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/unarchive']['body'],
    params?: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/unarchive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/planner/plans/{plannerPlan-id}/unarchive',
      paramDefs: {
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};
