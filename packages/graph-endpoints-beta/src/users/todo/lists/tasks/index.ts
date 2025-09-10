export * as attachmentSessions from './attachmentSessions';
export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    'get'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    'post'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'get'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'post'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    'get'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    'post'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    'get'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    'post'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks`
 *
 * The tasks in this task list. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: {
      path: ['user-id', 'todoTaskList-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * The tasks in this task list. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: {
      path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: {
      path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: {
      path: ['user-id', 'todoTaskList-id'],
    },
    params,
    body,
  };
}

export const checklistItems = {
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
   *
   * A collection of smaller subtasks linked to the more complex parent task.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['body'],
    params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
   *
   * A collection of smaller subtasks linked to the more complex parent task.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'checklistItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'checklistItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'checklistItem-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions`
   *
   * The collection of open extensions defined for the task. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['body'],
    params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the task. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'extension-id'],
      },
      params,
    };
  },
};

export const linkedResources = {
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources`
   *
   * A collection of resources linked to the task.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['body'],
    params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
   *
   * A collection of resources linked to the task.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'linkedResource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'linkedResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'todoTaskList-id', 'todoTask-id', 'linkedResource-id'],
      },
      params,
    };
  },
};
