import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/tasks/{plannerTask-id}': Operation<
    '/me/planner/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /me/planner/tasks': Operation<'/me/planner/tasks', 'get'>;
  'GET /me/planner/tasks/{plannerTask-id}': Operation<'/me/planner/tasks/{plannerTask-id}', 'get'>;
  'PATCH /me/planner/tasks/{plannerTask-id}': Operation<
    '/me/planner/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /me/planner/tasks': Operation<'/me/planner/tasks', 'post'>;
  'GET /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
  'DELETE /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
  'DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/tasks/{plannerTask-id}/details',
    'patch'
  >;
  'DELETE /me/planner/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
  'DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
}

/**
 * `DELETE /me/planner/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/planner/tasks/{plannerTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerTask-id'],
    },
    params,
  };
}

/**
 * `GET /me/planner/tasks`
 *
 * Retrieve a list of plannertask objects assigned to a User.
 */
export function list(
  params?: IEndpoints['GET /me/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/tasks']['response']> {
  return {
    method: 'get',
    path: '/me/planner/tasks',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/planner/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Returns the plannerPlans shared with the user.
 */
export function get(
  params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/tasks/{plannerTask-id}']['response']> {
  return {
    method: 'get',
    path: '/me/planner/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['plannerTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/planner/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/planner/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['plannerTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/planner/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/tasks']['body']
): EndpointRequest<IEndpoints['POST /me/planner/tasks']['response']> {
  return {
    method: 'post',
    path: '/me/planner/tasks',
    body,
  };
}

export const assignedToTaskBoardFormat = {
  /**
   * `GET /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      method: 'get',
      path: '/me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      method: 'patch',
      path: '/me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      method: 'delete',
      path: '/me/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
};

export const bucketTaskBoardFormat = {
  /**
   * `GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      method: 'get',
      path: '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      method: 'patch',
      path: '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      method: 'delete',
      path: '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
};

export const details = {
  /**
   * `GET /me/planner/tasks/{plannerTask-id}/details`
   *
   * Read-only. Nullable. More details about the task.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/tasks/{plannerTask-id}/details']['response']> {
    return {
      method: 'get',
      path: '/me/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/tasks/{plannerTask-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/details']['body'],
    params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/details']['response']> {
    return {
      method: 'patch',
      path: '/me/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/tasks/{plannerTask-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/details']['response']> {
    return {
      method: 'delete',
      path: '/me/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
};

export const progressTaskBoardFormat = {
  /**
   * `GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      method: 'get',
      path: '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      method: 'patch',
      path: '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      method: 'delete',
      path: '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
};
