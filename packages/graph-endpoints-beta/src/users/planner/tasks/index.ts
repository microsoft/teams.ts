import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/tasks': Operation<'/users/{user-id}/planner/tasks', 'get'>;
  'GET /users/{user-id}/planner/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/tasks': Operation<'/users/{user-id}/planner/tasks', 'post'>;
  'GET /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
  'DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
  'DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /users/{user-id}/planner/tasks/{plannerTask-id}/details': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/details',
    'patch'
  >;
  'DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/details': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
  'DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/planner/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner/tasks/{plannerTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'plannerTask-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/tasks`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/tasks',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['user-id', 'plannerTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['user-id', 'plannerTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/tasks',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const assignedToTaskBoardFormat = {
  /**
   * `GET /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const bucketTaskBoardFormat = {
  /**
   * `GET /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const details = {
  /**
   * `GET /users/{user-id}/planner/tasks/{plannerTask-id}/details`
   *
   * Read-only. Nullable. More details about the task.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const progressTaskBoardFormat = {
  /**
   * `GET /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
};
