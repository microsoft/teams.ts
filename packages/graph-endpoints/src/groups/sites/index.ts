export * as analytics from './analytics';
export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as lists from './lists';
export * as onenote from './onenote';
export * as pages from './pages';
export * as permissions from './permissions';
export * as termStore from './termStore';
export * as termStores from './termStores';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites': Operation<'/groups/{group-id}/sites', 'get'>;
  'GET /groups/{group-id}/sites/{site-id}': Operation<'/groups/{group-id}/sites/{site-id}', 'get'>;
  'PATCH /groups/{group-id}/sites/{site-id}': Operation<
    '/groups/{group-id}/sites/{site-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/add': Operation<'/groups/{group-id}/sites/add', 'post'>;
  'GET /groups/{group-id}/sites/{site-id}/drive': Operation<
    '/groups/{group-id}/sites/{site-id}/drive',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/drives': Operation<
    '/groups/{group-id}/sites/{site-id}/drives',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/drives/{drive-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/drives/{drive-id}',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/externalColumns': Operation<
    '/groups/{group-id}/sites/{site-id}/externalColumns',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/items': Operation<
    '/groups/{group-id}/sites/{site-id}/items',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/items/{baseItem-id}',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/operations',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/operations',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  'POST /groups/{group-id}/sites/remove': Operation<'/groups/{group-id}/sites/remove', 'post'>;
  'GET /groups/{group-id}/sites/{site-id}/sites': Operation<
    '/groups/{group-id}/sites/{site-id}/sites',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/sites/{site-id1}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites`
 *
 * The list of SharePoint sites in this group. Access the default site with /sites/root.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}`
 *
 * The list of SharePoint sites in this group. Access the default site with /sites/root.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /groups/{group-id}/sites/add`
   *
   * Follow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/add']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/add']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/add',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const drive = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/drive`
   *
   * The default drive (document library) for this site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/drive']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};

export const drives = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/drives`
   *
   * The collection of drives (document libraries) under this site.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/drives']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/drives']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/drives',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/drives/{drive-id}`
   *
   * The collection of drives (document libraries) under this site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/drives/{drive-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/drives/{drive-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/drives/{drive-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'drive-id'],
      },
      params,
    };
  },
};

export const externalColumns = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/externalColumns`
   *
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/externalColumns',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};

export const items = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/items`
   *
   * Used to address any item contained in this site. This collection can&#x27;t be enumerated.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/items']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/items']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}`
   *
   * Used to address any item contained in this site. This collection can&#x27;t be enumerated.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/items/{baseItem-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/items/{baseItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'baseItem-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/operations`
   *
   * The collection of long-running operations on the site.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/operations']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/operations']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/operations',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   * The collection of long-running operations on the site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'richLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
};

export const remove = {
  /**
   * `POST /groups/{group-id}/sites/remove`
   *
   * Unfollow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/remove']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/remove']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/remove']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/remove',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const sitesSites = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/sites`
   *
   * The collection of the sub-sites under this site.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/sites',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}`
   *
   * The collection of the sub-sites under this site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/sites/{site-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'site-id1'],
      },
      params,
    };
  },
};
