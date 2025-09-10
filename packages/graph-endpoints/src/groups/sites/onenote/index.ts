export * as notebooks from './notebooks';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/onenote': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote',
    'patch'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/operations',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/onenote/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/operations',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote`
 *
 * Calls the OneNote service for notebook related operations.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/onenote',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const operations = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/onenote/operations`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/operations']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/onenote/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/onenote/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/operations']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/operations']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/onenote/operations',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'onenoteOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenoteOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'onenoteOperation-id'],
      },
      params,
    };
  },
};
