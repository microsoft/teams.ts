export * as notebooks from './notebooks';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote': Operation<'/sites/{site-id}/onenote', 'delete'>;
  'GET /sites/{site-id}/onenote': Operation<'/sites/{site-id}/onenote', 'get'>;
  'PATCH /sites/{site-id}/onenote': Operation<'/sites/{site-id}/onenote', 'patch'>;
  'GET /sites/{site-id}/onenote/operations': Operation<
    '/sites/{site-id}/onenote/operations',
    'get'
  >;
  'POST /sites/{site-id}/onenote/operations': Operation<
    '/sites/{site-id}/onenote/operations',
    'post'
  >;
  'GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const operations = {
  /**
   * `GET /sites/{site-id}/onenote/operations`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/onenote/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/onenote/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/onenote/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/operations']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/onenote/operations',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'onenoteOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        path: ['site-id', 'onenoteOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'onenoteOperation-id'],
      },
      params,
    };
  },
};
