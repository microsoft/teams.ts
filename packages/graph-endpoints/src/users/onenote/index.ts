export * as notebooks from './notebooks';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote': Operation<'/users/{user-id}/onenote', 'delete'>;
  'GET /users/{user-id}/onenote': Operation<'/users/{user-id}/onenote', 'get'>;
  'PATCH /users/{user-id}/onenote': Operation<'/users/{user-id}/onenote', 'patch'>;
  'GET /users/{user-id}/onenote/operations': Operation<
    '/users/{user-id}/onenote/operations',
    'get'
  >;
  'POST /users/{user-id}/onenote/operations': Operation<
    '/users/{user-id}/onenote/operations',
    'post'
  >;
  'GET /users/{user-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/onenote']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onenote',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/onenote']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onenote',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const operations = {
  /**
   * `GET /users/{user-id}/onenote/operations`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/onenote/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/operations']['response']> {
    return {
      method: 'get',
      path: '/users/{user-id}/onenote/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/onenote/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onenote/operations']['body'],
    params?: IEndpoints['POST /users/{user-id}/onenote/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/operations']['response']> {
    return {
      method: 'post',
      path: '/users/{user-id}/onenote/operations',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/onenote/operations/{onenoteOperation-id}`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onenoteOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        path: ['user-id', 'onenoteOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onenoteOperation-id'],
      },
      params,
    };
  },
};
