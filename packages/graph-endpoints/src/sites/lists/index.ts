export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}': Operation<
    '/sites/{site-id}/lists/{list-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists': Operation<'/sites/{site-id}/lists', 'get'>;
  'GET /sites/{site-id}/lists/{list-id}': Operation<'/sites/{site-id}/lists/{list-id}', 'get'>;
  'PATCH /sites/{site-id}/lists/{list-id}': Operation<'/sites/{site-id}/lists/{list-id}', 'patch'>;
  'POST /sites/{site-id}/lists': Operation<'/sites/{site-id}/lists', 'post'>;
  'GET /sites/{site-id}/lists/{list-id}/drive': Operation<
    '/sites/{site-id}/lists/{list-id}/drive',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/operations': Operation<
    '/sites/{site-id}/lists/{list-id}/operations',
    'get'
  >;
  'POST /sites/{site-id}/lists/{list-id}/operations': Operation<
    '/sites/{site-id}/lists/{list-id}/operations',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/lists/{list-id}']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id'],
    },
    params,
  };
}

/**
  * `GET /sites/{site-id}/lists`
  *
  * Get the collection of lists for a site. Lists with the system facet are hidden by default.
To list them, include system in your $select statement.
  */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}`
 *
 * Returns the metadata for a list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}',
    paramDefs: {
      path: ['site-id', 'list-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/lists/{list-id}']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}',
    paramDefs: {
      path: ['site-id', 'list-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists`
 *
 * Create a new list in a site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const drive = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/drive`
   *
   * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/drive']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/operations`
   *
   * The collection of long-running operations on the list.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/operations']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'list-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/lists/{list-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/operations']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/operations']['response']> {
    return {
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/operations',
      paramDefs: {
        path: ['site-id', 'list-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}`
   *
   * The collection of long-running operations on the list.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        path: ['site-id', 'list-id', 'richLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'list-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
};
