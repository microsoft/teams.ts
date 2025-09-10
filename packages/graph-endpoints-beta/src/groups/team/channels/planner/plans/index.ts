export * as buckets from './buckets';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/planner/plans': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/planner/plans': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive',
    'post'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'channel-id', 'plannerPlan-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/planner/plans`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans',
    paramDefs: {
      path: ['group-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['group-id', 'channel-id', 'plannerPlan-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['group-id', 'channel-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans',
    paramDefs: {
      path: ['group-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive`
   *
   * Archive a plannerPlan object. Archiving a plan, also archives the plannerTasks and plannerBuckets in the plan.  An archived entity is read-only. Archived entities cannot be updated. An archived plan can be unarchived.  All archived entities can be deleted. Archived tasks are not included in the response for list of tasks assigned to a user.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive',
      paramDefs: {
        path: ['group-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const details = {
  /**
   * `GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
   *
   * Extra details about the plan. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};

export const moveToContainer = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer`
   *
   * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer',
      paramDefs: {
        path: ['group-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const unarchive = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive`
   *
   * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive',
      paramDefs: {
        path: ['group-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};
