export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists': Operation<'/users/{user-id}/todo/lists', 'get'>;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}',
    'patch'
  >;
  'POST /users/{user-id}/todo/lists': Operation<'/users/{user-id}/todo/lists', 'post'>;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions',
    'get'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions',
    'post'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'todoTaskList-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists`
 *
 * The task lists in the users mailbox.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/todo/lists']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/todo/lists',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}`
 *
 * The task lists in the users mailbox.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}',
    paramDefs: {
      path: ['user-id', 'todoTaskList-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}',
    paramDefs: {
      path: ['user-id', 'todoTaskList-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/todo/lists`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/todo/lists']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/todo/lists',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const extensions = {
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions`
   *
   * The collection of open extensions defined for the task list. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'todoTaskList-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions']['body'],
    params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/extensions']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the task list. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'todoTaskList-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['user-id', 'todoTaskList-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'todoTaskList-id', 'extension-id'],
      },
      params,
    };
  },
};
