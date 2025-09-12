export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}',
    'delete'
  >;
  'GET /me/todo/lists': Operation<'/me/todo/lists', 'get'>;
  'GET /me/todo/lists/{todoTaskList-id}': Operation<'/me/todo/lists/{todoTaskList-id}', 'get'>;
  'PATCH /me/todo/lists/{todoTaskList-id}': Operation<'/me/todo/lists/{todoTaskList-id}', 'patch'>;
  'POST /me/todo/lists': Operation<'/me/todo/lists', 'post'>;
  'GET /me/todo/lists/{todoTaskList-id}/extensions': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions',
    'get'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/extensions': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions',
    'post'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}`
 *
 * Deletes a todoTaskList object.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['todoTaskList-id'],
    },
    params,
  };
}

/**
 * `GET /me/todo/lists`
 *
 * Get a list of the todoTaskList objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo/lists',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}`
 *
 * Read the properties and relationships of a todoTaskList object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists/{todoTaskList-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}',
    paramDefs: {
      path: ['todoTaskList-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}`
 *
 * Update the properties of a todoTaskList object.
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}',
    paramDefs: {
      path: ['todoTaskList-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists`
 *
 * Create a new lists object.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists']['body']
): EndpointRequest<IEndpoints['POST /me/todo/lists']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/todo/lists',
    body,
  };
}

export const extensions = {
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/extensions`
   *
   * The collection of open extensions defined for the task list. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['todoTaskList-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/todo/lists/{todoTaskList-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/extensions']['body'],
    params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/todo/lists/{todoTaskList-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/todo/lists/{todoTaskList-id}/extensions',
      paramDefs: {
        path: ['todoTaskList-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the task list. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['todoTaskList-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['todoTaskList-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['todoTaskList-id', 'extension-id'],
      },
      params,
    };
  },
};
