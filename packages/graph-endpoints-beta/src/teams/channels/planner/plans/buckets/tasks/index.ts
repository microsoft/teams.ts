import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'post'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'patch'
  >;
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
  'DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: {
      path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: {
      path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id'],
    },
    params,
    body,
  };
}

export const assignedToTaskBoardFormat = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const bucketTaskBoardFormat = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const details = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
   *
   * Read-only. Nullable. More details about the task.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const progressTaskBoardFormat = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/channels/{channel-id}/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};
