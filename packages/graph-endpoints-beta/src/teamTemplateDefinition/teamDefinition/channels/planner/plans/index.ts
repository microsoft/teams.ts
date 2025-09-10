export * as buckets from './buckets';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive',
    'post'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'patch'
  >;
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
    'delete'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 * A collection of plannerPlan objects owned by the Teams channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive`
   *
   * Archive a plannerPlan object. Archiving a plan, also archives the plannerTasks and plannerBuckets in the plan.  An archived entity is read-only. Archived entities cannot be updated. An archived plan can be unarchived.  All archived entities can be deleted. Archived tasks are not included in the response for list of tasks assigned to a user.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/archive',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const details = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
   *
   * Extra details about the plan. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['body'],
    params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};

export const moveToContainer = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer`
   *
   * Move a planner plan object from one planner plan container to another. Planner plans can only be moved from a user container to a group container.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/moveToContainer',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};

export const unarchive = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive`
   *
   * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/planner/plans/{plannerPlan-id}/unarchive',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'plannerPlan-id'],
      },
      params,
      body,
    };
  },
};
