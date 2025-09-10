import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'get'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    'post'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'patch'
  >;
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
    },
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. The collection of tasks in the bucket.
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['body'],
  params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks',
    paramDefs: {
      path: ['plannerPlan-id', 'plannerBucket-id'],
    },
    params,
    body,
  };
}

export const assignedToTaskBoardFormat = {
  /**
   * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const bucketTaskBoardFormat = {
  /**
   * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const details = {
  /**
   * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
   *
   * Read-only. Nullable. More details about the task.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['body'],
    params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const progressTaskBoardFormat = {
  /**
   * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerPlan-id', 'plannerBucket-id', 'plannerTask-id'],
      },
      params,
    };
  },
};
