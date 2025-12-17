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

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites': Operation<'/sites', 'get'>;
  'GET /sites/{site-id}': Operation<'/sites/{site-id}', 'get'>;
  'PATCH /sites/{site-id}': Operation<'/sites/{site-id}', 'patch'>;
  'POST /sites': Operation<'/sites', 'post'>;
  'POST /sites/add': Operation<'/sites/add', 'post'>;
  'POST /sites/{site-id}/archive': Operation<'/sites/{site-id}/archive', 'post'>;
  'GET /sites/{site-id}/documentProcessingJobs': Operation<
    '/sites/{site-id}/documentProcessingJobs',
    'get'
  >;
  'POST /sites/{site-id}/documentProcessingJobs': Operation<
    '/sites/{site-id}/documentProcessingJobs',
    'post'
  >;
  'GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'delete'
  >;
  'GET /sites/{site-id}/drive': Operation<'/sites/{site-id}/drive', 'get'>;
  'GET /sites/{site-id}/drives': Operation<'/sites/{site-id}/drives', 'get'>;
  'GET /sites/{site-id}/drives/{drive-id}': Operation<'/sites/{site-id}/drives/{drive-id}', 'get'>;
  'GET /sites/{site-id}/extensions': Operation<'/sites/{site-id}/extensions', 'get'>;
  'POST /sites/{site-id}/extensions': Operation<'/sites/{site-id}/extensions', 'post'>;
  'GET /sites/{site-id}/extensions/{extension-id}': Operation<
    '/sites/{site-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/extensions/{extension-id}': Operation<
    '/sites/{site-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/extensions/{extension-id}': Operation<
    '/sites/{site-id}/extensions/{extension-id}',
    'delete'
  >;
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
  'POST /sites/{site-id}/unarchive': Operation<'/sites/{site-id}/unarchive', 'post'>;
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites`
 *
 * Create a new SharePoint site.
 */
export function create(
  body: IEndpoints['POST /sites']['body']
): EndpointRequest<IEndpoints['POST /sites']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites',
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
      ver: 'beta',
      method: 'post',
      path: '/sites/add',
      body,
    };
  },
};

export const archive = {
  /**
   * `POST /sites/{site-id}/archive`
   *
   * Archive an active SharePoint site.
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/archive']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/archive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/archive',
      paramDefs: {
        path: ['site-id'],
      },
      params,
    };
  },
};

export const documentProcessingJobs = {
  /**
   * `GET /sites/{site-id}/documentProcessingJobs`
   *
   * The document processing jobs running on this site.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/documentProcessingJobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/documentProcessingJobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/documentProcessingJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/documentProcessingJobs`
   *
   * Create a new documentProcessingJob object. The document processing job queues a document, or all documents in a folder, for processing by the applied content models.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/documentProcessingJobs']['body'],
    params?: IEndpoints['POST /sites/{site-id}/documentProcessingJobs']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/documentProcessingJobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/documentProcessingJobs',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
   *
   * The document processing jobs running on this site.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'documentProcessingJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
      paramDefs: {
        path: ['site-id', 'documentProcessingJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'documentProcessingJob-id'],
      },
      params,
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const extensions = {
  /**
   * `GET /sites/{site-id}/extensions`
   *
   * The collection of open extensions defined for this site. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/extensions`
   *
   * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/extensions']['body'],
    params?: IEndpoints['POST /sites/{site-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/extensions',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for this site. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'extension-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /sites/{site-id}/extensions/{extension-id}`
  *
  * Update an open extension (openTypeExtension object) on a supported resource type.
- If a property in the request body matches the name of an existing property in the extension, the data in the extension is updated.
- Otherwise, that property and its data are added to the extension.  The data in an extension can be primitive types or arrays of primitive types. The operation behaves differently for resources that are directory objects vs other resources. For the list of resources that support open extensions, see the table in the Permissions section.
  */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['site-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/extensions/{extension-id}`
   *
   * Delete an open extension (openTypeExtension object) from the specified instance of a resource.  For the list of resources that support open extensions, see the table in the Permissions section.
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/sites/{site-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'extension-id'],
      },
      params,
    };
  },
};

export const externalColumns = {
  /**
   * `GET /sites/{site-id}/externalColumns`
   *
   * The collection of column definitions available in the site that is referenced from the sites in the parent hierarchy of the current site.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/externalColumns']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/externalColumns']['response']> {
    return {
      ver: 'beta',
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
   * The collection of column definitions available in the site that is referenced from the sites in the parent hierarchy of the current site.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/externalColumns/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/externalColumns/{columnDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Get the list of richLongRunningOperations associated with a site.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /sites/{site-id}/operations']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   * Read the properties of a richLongRunningOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const unarchive = {
  /**
   * `POST /sites/{site-id}/unarchive`
   *
   * Unarchive an archived SharePoint site.
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/unarchive']['parameters']
  ): EndpointRequest<IEndpoints['POST /sites/{site-id}/unarchive']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/unarchive',
      paramDefs: {
        path: ['site-id'],
      },
      params,
    };
  },
};
