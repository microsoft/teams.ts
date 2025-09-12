import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    'get'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    'patch'
  >;
  'POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    'post'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    'patch'
  >;
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    'patch'
  >;
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
    'delete'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}`
 *
 * Delete a businessScenarioTask object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['businessScenario-id', 'businessScenarioTask-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks`
 *
 * Get a list of the businessScenarioTask objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    paramDefs: {
      path: ['businessScenario-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}`
 *
 * Read the properties and relationships of a businessScenarioTask object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    paramDefs: {
      path: ['businessScenario-id', 'businessScenarioTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}`
 *
 * Update the properties of a businessScenarioTask object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    paramDefs: {
      path: ['businessScenario-id', 'businessScenarioTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks`
 *
 * Create a new businessScenarioTask object.
 */
export function create(
  body: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['body'],
  params?: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    paramDefs: {
      path: ['businessScenario-id'],
    },
    params,
    body,
  };
}

export const assignedToTaskBoardFormat = {
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
};

export const bucketTaskBoardFormat = {
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
};

export const details = {
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details`
   *
   * Read-only. Nullable. More details about the task.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['body'],
    params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
};

export const progressTaskBoardFormat = {
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat`
   *
   * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id', 'businessScenarioTask-id'],
      },
      params,
    };
  },
};
