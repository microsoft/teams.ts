export * as columns from './columns';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/contentTypes': Operation<
    '/drives/{drive-id}/list/contentTypes',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/contentTypes': Operation<
    '/drives/{drive-id}/list/contentTypes',
    'post'
  >;
  'POST /drives/{drive-id}/list/contentTypes/addCopy': Operation<
    '/drives/{drive-id}/list/contentTypes/addCopy',
    'post'
  >;
  'POST /drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub': Operation<
    '/drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub',
    'post'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/base': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/base',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/publish',
    'post'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'contentType-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes`
 *
 * The collection of content types present in this list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}`
 *
 * The collection of content types present in this list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['drive-id', 'contentType-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['drive-id', 'contentType-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const addCopy = {
  /**
   * `POST /drives/{drive-id}/list/contentTypes/addCopy`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopy']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopy']['parameters']
  ): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopy']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/addCopy',
      paramDefs: {
        path: ['drive-id'],
      },
      params,
      body,
    };
  },
};

export const addCopyFromContentTypeHub = {
  /**
   * `POST /drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub`
   *
   * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a &#x27;push everywhere&#x27; to &#x27;pull as needed&#x27; approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/addCopyFromContentTypeHub',
      paramDefs: {
        path: ['drive-id'],
      },
      params,
      body,
    };
  },
};

export const associateWithHubSites = {
  /**
   * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites',
      paramDefs: {
        path: ['drive-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const base = {
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/base`
   *
   * Parent contentType from which this content type is derived.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/base']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/base']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/base',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const baseTypes = {
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes`
   *
   * The collection of content types that are ancestors of this content type.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}`
   *
   * The collection of content types that are ancestors of this content type.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'contentType-id', 'contentType-id1'],
      },
      params,
    };
  },
};

export const columnLinks = {
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks`
   *
   * The collection of columns that are required by this content type.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        path: ['drive-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   * The collection of columns that are required by this content type.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        path: ['drive-id', 'contentType-id', 'columnLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
};

export const columnPositions = {
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions`
   *
   * Column order information in a content type.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
   *
   * Column order information in a content type.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};

export const copyToDefaultContentLocation = {
  /**
   * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
      paramDefs: {
        path: ['drive-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const publish = {
  /**
   * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/publish',
      paramDefs: {
        path: ['drive-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const unpublish = {
  /**
   * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish',
      paramDefs: {
        path: ['drive-id', 'contentType-id'],
      },
      params,
    };
  },
};
