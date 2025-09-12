export * as analytics from './analytics';
export * as columns from './columns';
export * as contentModels from './contentModels';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as informationProtection from './informationProtection';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as lists from './lists';
export * as onenote from './onenote';
export * as pageTemplates from './pageTemplates';
export * as pages from './pages';
export * as permissions from './permissions';
export * as recycleBin from './recycleBin';
export * as termStore from './termStore';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites': Operation<'/groups/{group-id}/sites', 'get'>;
  'GET /groups/{group-id}/sites/{site-id}': Operation<'/groups/{group-id}/sites/{site-id}', 'get'>;
  'PATCH /groups/{group-id}/sites/{site-id}': Operation<
    '/groups/{group-id}/sites/{site-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/add': Operation<'/groups/{group-id}/sites/add', 'post'>;
  'POST /groups/{group-id}/sites/{site-id}/archive': Operation<
    '/groups/{group-id}/sites/{site-id}/archive',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'delete'
  >;
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
  'GET /groups/{group-id}/sites/{site-id}/extensions': Operation<
    '/groups/{group-id}/sites/{site-id}/extensions',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/extensions': Operation<
    '/groups/{group-id}/sites/{site-id}/extensions',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/extensions/{extension-id}',
    'delete'
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
  'POST /groups/{group-id}/sites/{site-id}/unarchive': Operation<
    '/groups/{group-id}/sites/{site-id}/unarchive',
    'post'
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
      ver: 'beta',
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

export const archive = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/archive`
   *
   * Archive an active SharePoint site.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/archive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/archive',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};

export const documentProcessingJobs = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs`
   *
   * The document processing jobs running on this site.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
   *
   * The document processing jobs running on this site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'documentProcessingJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'documentProcessingJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'documentProcessingJob-id'],
      },
      params,
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const extensions = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/extensions`
   *
   * The collection of open extensions defined for this site. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/extensions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/extensions',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for this site. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'extension-id'],
      },
      params,
    };
  },
};

export const externalColumns = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/externalColumns`
   *
   * The collection of column definitions available in the site that is referenced from the sites in the parent hierarchy of the current site.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns']['response']
  > {
    return {
      ver: 'beta',
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
   * The collection of column definitions available in the site that is referenced from the sites in the parent hierarchy of the current site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/externalColumns/{columnDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * The collection of long running operations for the site.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   * The collection of long running operations for the site.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const unarchive = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/unarchive`
   *
   * Unarchive an archived SharePoint site.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/unarchive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/unarchive',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};
