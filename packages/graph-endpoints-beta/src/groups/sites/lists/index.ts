export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as permissions from './permissions';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists': Operation<
    '/groups/{group-id}/sites/{site-id}/lists',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists': Operation<
    '/groups/{group-id}/sites/{site-id}/lists',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/drive': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/drive',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'list-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists`
 *
 * The collection of lists under this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}`
 *
 * The collection of lists under this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const activities = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities`
   *
   * The recent activities that took place within this list.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
      body,
    };
  },
};

export const drive = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/drive`
   *
   * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/drive']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/drive']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations`
   *
   * The collection of long-running operations on the list.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}`
   *
   * The collection of long-running operations on the list.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id', 'richLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'list-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
};
