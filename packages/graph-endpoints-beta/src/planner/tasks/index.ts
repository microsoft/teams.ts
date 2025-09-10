import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/tasks/{plannerTask-id}': Operation<'/planner/tasks/{plannerTask-id}', 'delete'>;
  'GET /planner/tasks': Operation<'/planner/tasks', 'get'>;
  'GET /planner/tasks/{plannerTask-id}': Operation<'/planner/tasks/{plannerTask-id}', 'get'>;
  'PATCH /planner/tasks/{plannerTask-id}': Operation<'/planner/tasks/{plannerTask-id}', 'patch'>;
  'POST /planner/tasks': Operation<'/planner/tasks', 'post'>;
  'GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
  'DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
  'DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/details': Operation<
    '/planner/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/details': Operation<
    '/planner/tasks/{plannerTask-id}/details',
    'patch'
  >;
  'DELETE /planner/tasks/{plannerTask-id}/details': Operation<
    '/planner/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
  'DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
}

/**
 * `DELETE /planner/tasks/{plannerTask-id}`
 *
 * Delete a plannerTask object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/tasks/{plannerTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerTask-id'],
    },
    params,
  };
}

/**
 * `GET /planner/tasks`
 *
 * Retrieve a list of plannertask objects.
 */
export function list(
  params?: IEndpoints['GET /planner/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/tasks',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /planner/tasks/{plannerTask-id}`
 *
 * Retrieve the properties and relationships of plannerTask object.
 */
export function get(
  params?: IEndpoints['GET /planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/tasks/{plannerTask-id}',
    paramDefs: {
      path: ['plannerTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /planner/tasks/{plannerTask-id}`
 *
 * Update the properties of plannertask object.
 */
export function update(
  body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/tasks/{plannerTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /planner/tasks`
 *
 * Create a new plannerTask.
 */
export function create(
  body: IEndpoints['POST /planner/tasks']['body']
): EndpointRequest<IEndpoints['POST /planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/tasks',
    body,
  };
}

export const assignedToTaskBoardFormat = {
  /**
   * `GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   * Retrieve the properties and relationships of plannerAssignedToTaskBoardTaskFormat object.
   */
  get: function get(
    params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   * Update the properties of plannerAssignedToTaskBoardTaskFormat object.
   */
  update: function update(
    body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
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
   * `GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   * Retrieve the properties and relationships of plannerBucketTaskBoardTaskFormat object.
   */
  get: function get(
    params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   * Update the properties of a plannerBucketTaskBoardTaskFormat object.
   */
  update: function update(
    body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
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
   * `GET /planner/tasks/{plannerTask-id}/details`
   *
   * Retrieve the properties and relationships of a plannerTaskDetails object.
   */
  list: function list(
    params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['GET /planner/tasks/{plannerTask-id}/details']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /planner/tasks/{plannerTask-id}/details`
   *
   * Update the properties of plannerTaskDetails object.
   */
  update: function update(
    body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/details']['body'],
    params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /planner/tasks/{plannerTask-id}/details']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/planner/tasks/{plannerTask-id}/details',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /planner/tasks/{plannerTask-id}/details`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/details']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /planner/tasks/{plannerTask-id}/details']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/planner/tasks/{plannerTask-id}/details',
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
   * `GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   * Retrieve the properties and relationships of plannerProgressTaskBoardTaskFormat object.
   */
  get: function get(
    params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   * Update the properties of plannerProgressTaskBoardTaskFormat object.
   */
  update: function update(
    body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
    params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
};
