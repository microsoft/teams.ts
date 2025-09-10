export * as attachmentSessions from './attachmentSessions';
export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'patch'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks',
    'post'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'get'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'post'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'patch'
  >;
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    'get'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    'post'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    'get'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
    'post'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'patch'
  >;
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * Delete a todoTask object.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['todoTaskList-id', 'todoTask-id'],
    },
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks`
 *
 * Get the todoTask resources from the tasks navigation property of a specified todoTaskList.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks']['response']> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: {
      path: ['todoTaskList-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * Read the properties and relationships of a todoTask object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: {
      path: ['todoTaskList-id', 'todoTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * Update the properties of a todoTask object.
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: {
      path: ['todoTaskList-id', 'todoTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/tasks`
 *
 * Create a new task object in a specified todoTaskList.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks']['response']> {
  return {
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: {
      path: ['todoTaskList-id'],
    },
    params,
    body,
  };
}

export const checklistItems = {
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
   *
   * Get the checklistItem resources associated to a todoTask from the checklistItems navigation property.
   */
  list: function list(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
  > {
    return {
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
   *
   * Create a new checklistItem object.
   */
  create: function create(
    body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['body'],
    params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
  > {
    return {
      method: 'post',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
   *
   * Read the properties and relationships of a checklistItem object.
   */
  get: function get(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['todoTaskList-id', 'todoTask-id', 'checklistItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
   *
   * Update the properties of a checklistItem object.
   */
  update: function update(
    body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['body'],
    params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id', 'checklistItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
   *
   * Delete a checklistItem object.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['todoTaskList-id', 'todoTask-id', 'checklistItem-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions`
   *
   * The collection of open extensions defined for the task. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['response']
  > {
    return {
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['body'],
    params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['response']
  > {
    return {
      method: 'post',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the task. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['todoTaskList-id', 'todoTask-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['todoTaskList-id', 'todoTask-id', 'extension-id'],
      },
      params,
    };
  },
};

export const linkedResources = {
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources`
   *
   * Get information of one or more items in a partner application, based on which a specified task was created. The information is represented in a linkedResource object for each item. It includes an external ID for the item in the partner application, and if applicable, a deep link to that item in the application.
   */
  list: function list(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['response']
  > {
    return {
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources`
   *
   * Create a linkedResource object to associate a specified task with an item in a partner application. For example, you can associate a task with an email item in Outlook that spurred the task, and you can create a linkedResource object to track its association. You can also create a linkedResource object while creating a task.
   */
  create: function create(
    body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['body'],
    params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources']['response']
  > {
    return {
      method: 'post',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
   *
   * Read the properties and relationships of a linkedResource object.
   */
  get: function get(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['todoTaskList-id', 'todoTask-id', 'linkedResource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
   *
   * Update the properties of a linkedResource object.
   */
  update: function update(
    body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['body'],
    params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id', 'linkedResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}`
   *
   * Delete a linkedResource object.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['todoTaskList-id', 'todoTask-id', 'linkedResource-id'],
      },
      params,
    };
  },
};
