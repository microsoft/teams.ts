export * as columns from './columns';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/addCopy',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'contentType-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes`
 *
 * The collection of content types present in this list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}`
 *
 * The collection of content types present in this list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'contentType-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'contentType-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

export const addCopy = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy`
   *
   * Add a copy of a content type from a site to a list.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopy']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/addCopy',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
};

export const addCopyFromContentTypeHub = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub`
   *
   * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a &#x27;push everywhere&#x27; to &#x27;pull as needed&#x27; approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see contentType: getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/addCopyFromContentTypeHub',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
};

export const associateWithHubSites = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites`
   *
   * Associate a published content type present in a content type hub with a list of hub sites.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/associateWithHubSites',
      paramDefs: {
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const base = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base`
   *
   * Parent contentType from which this content type is derived.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const baseTypes = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes`
   *
   * The collection of content types that are ancestors of this content type.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}`
   *
   * The collection of content types that are ancestors of this content type.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id', 'contentType-id1'],
      },
      params,
    };
  },
};

export const columnLinks = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks`
   *
   * The collection of columns that are required by this content type.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   * The collection of columns that are required by this content type.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        path: ['sharedDriveItem-id', 'contentType-id', 'columnLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
};

export const columnPositions = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions`
   *
   * Column order information in a content type.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
   *
   * Column order information in a content type.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};

export const copyToDefaultContentLocation = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation`
   *
   * Copy a file to a default content location in a content type. The file can then be added as a default file or template via a POST operation.
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
      paramDefs: {
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const publish = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish`
   *
   * Publishes a contentType present in the content type hub site.
   */
  create: function create(
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/publish',
      paramDefs: {
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const unpublish = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish`
   *
   * Unpublish a contentType from a content type hub site.
   */
  create: function create(
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/unpublish',
      paramDefs: {
        path: ['sharedDriveItem-id', 'contentType-id'],
      },
      params,
    };
  },
};
