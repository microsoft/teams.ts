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

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites': Operation<'/sites', 'get'>;
  'GET /sites/{site-id}': Operation<'/sites/{site-id}', 'get'>;
  'PATCH /sites/{site-id}': Operation<'/sites/{site-id}', 'patch'>;
  'POST /sites/add': Operation<'/sites/add', 'post'>;
  'GET /sites/{site-id}/drive': Operation<'/sites/{site-id}/drive', 'get'>;
  'GET /sites/{site-id}/drives': Operation<'/sites/{site-id}/drives', 'get'>;
  'GET /sites/{site-id}/drives/{drive-id}': Operation<'/sites/{site-id}/drives/{drive-id}', 'get'>;
  'GET /sites/{site-id}/externalColumns': Operation<'/sites/{site-id}/externalColumns', 'get'>;
  'GET /sites/{site-id}/externalColumns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/externalColumns/{columnDefinition-id}',
    'get'
  >;
  'GET /sites/{site-id}/items': Operation<'/sites/{site-id}/items', 'get'>;
  'GET /sites/{site-id}/items/{baseItem-id}': Operation<
    '/sites/{site-id}/items/{baseItem-id}',
    'get'
  >;
  'GET /sites/{site-id}/operations': Operation<'/sites/{site-id}/operations', 'get'>;
  'POST /sites/{site-id}/operations': Operation<'/sites/{site-id}/operations', 'post'>;
  'GET /sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  'POST /sites/remove': Operation<'/sites/remove', 'post'>;
  'GET /sites/{site-id}/sites': Operation<'/sites/{site-id}/sites', 'get'>;
  'GET /sites/{site-id}/sites/{site-id1}': Operation<'/sites/{site-id}/sites/{site-id1}', 'get'>;
}

/**
  * `GET /sites`
  *
  * List all available sites in an organization. Specific filter criteria and query options are also supported and described below: In addition, you can use a $search query against the /sites collection to find sites matching given keywords.
If you want to list all sites across all geographies, refer to getAllSites. For more guidance about building applications that use site discovery for scanning purposes, see Best practices for discovering files and detecting changes at scale.
  */
export function list(
  params?: IEndpoints['GET /sites']['parameters']
): EndpointRequest<IEndpoints['GET /sites']['response']> {
  return {
    method: 'get',
    path: '/sites',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /sites/{site-id}`
  *
  * Retrieve properties and relationships for a site resource.
A site resource represents a team site in SharePoint.
  */
export function get(
  params?: IEndpoints['GET /sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /sites/add`
   *
   * Follow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /sites/add']['body']
  ): EndpointRequest<IEndpoints['POST /sites/add']['response']> {
    return {
      method: 'post',
      path: '/sites/add',
      body,
    };
  },
};

export const drive = {
  /**
   * `GET /sites/{site-id}/drive`
   *
   * The default drive (document library) for this site.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/drive']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
};

export const drives = {
  /**
   * `GET /sites/{site-id}/drives`
   *
   * The collection of drives (document libraries) under this site.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/drives']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/drives']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/drives',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/drives/{drive-id}`
   *
   * The collection of drives (document libraries) under this site.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/drives/{drive-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/drives/{drive-id}']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/drives/{drive-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'drive-id'],
      },
      params,
    };
  },
};

export const externalColumns = {
  /**
   * `GET /sites/{site-id}/externalColumns`
   *
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/externalColumns']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/externalColumns']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/externalColumns',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/externalColumns/{columnDefinition-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/externalColumns/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/externalColumns/{columnDefinition-id}']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/externalColumns/{columnDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};

export const items = {
  /**
   * `GET /sites/{site-id}/items`
   *
   * Used to address any item contained in this site. This collection can&#x27;t be enumerated.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/items']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/items']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/items/{baseItem-id}`
   *
   * Used to address any item contained in this site. This collection can&#x27;t be enumerated.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/items/{baseItem-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/items/{baseItem-id}']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/items/{baseItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'baseItem-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /sites/{site-id}/operations`
   *
   * Get a list of rich long-running operations associated with a site.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/operations']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/operations']['body'],
    params?: IEndpoints['POST /sites/{site-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/operations']['response']> {
    return {
      method: 'post',
      path: '/sites/{site-id}/operations',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   * Get the status of a rich long-running operation on a site or a list.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        path: ['site-id', 'richLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/sites/{site-id}/operations/{richLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
};

export const remove = {
  /**
   * `POST /sites/remove`
   *
   * Unfollow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /sites/remove']['body']
  ): EndpointRequest<IEndpoints['POST /sites/remove']['response']> {
    return {
      method: 'post',
      path: '/sites/remove',
      body,
    };
  },
};

export const sitesSites = {
  /**
   * `GET /sites/{site-id}/sites`
   *
   * Get a collection of subsites defined for a site.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/sites']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/sites']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/sites',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/sites/{site-id1}`
   *
   * The collection of the sub-sites under this site.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/sites/{site-id1}']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/sites/{site-id1}']['response']> {
    return {
      method: 'get',
      path: '/sites/{site-id}/sites/{site-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'site-id1'],
      },
      params,
    };
  },
};
