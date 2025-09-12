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
  'POST /me/planner/plans/{plannerPlan-id}/archive': Operation<
    '/me/planner/plans/{plannerPlan-id}/archive',
    'post'
  >;
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
  'POST /me/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/me/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
  'POST /me/planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/me/planner/plans/{plannerPlan-id}/unarchive',
    'post'
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
    ver: 'beta',
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
    ver: 'beta',
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
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'post',
    path: '/me/planner/plans',
    body,
  };
}

export const archive = {
  /**
   * `POST /me/planner/plans/{plannerPlan-id}/archive`
   *
   * Archive a plannerPlan object. Archiving a plan, also archives the plannerTasks and plannerBuckets in the plan.  An archived entity is read-only. Archived entities cannot be updated. An archived plan can be unarchived.  All archived entities can be deleted. Archived tasks are not included in the response for list of tasks assigned to a user.
   */
  create: function create(
    body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/archive']['body'],
    params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/planner/plans/{plannerPlan-id}/archive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/planner/plans/{plannerPlan-id}/archive',
      paramDefs: {
        path: ['plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const details = {
  /**
   * `GET /me/planner/plans/{plannerPlan-id}/details`
   *
   * Extra details about the plan. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}/details']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const moveToContainer = {
  /**
   * `POST /me/planner/plans/{plannerPlan-id}/moveToContainer`
   *
   * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
   */
  create: function create(
    body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
    params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/planner/plans/{plannerPlan-id}/moveToContainer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/planner/plans/{plannerPlan-id}/moveToContainer',
      paramDefs: {
        path: ['plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const unarchive = {
  /**
   * `POST /me/planner/plans/{plannerPlan-id}/unarchive`
   *
   * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
   */
  create: function create(
    body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/unarchive']['body'],
    params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/planner/plans/{plannerPlan-id}/unarchive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/planner/plans/{plannerPlan-id}/unarchive',
      paramDefs: {
        path: ['plannerPlan-id'],
      },
      params,
      body,
    };
  },
};
