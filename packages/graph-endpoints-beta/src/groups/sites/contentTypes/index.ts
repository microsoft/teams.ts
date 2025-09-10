export * as columns from './columns';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/addCopy',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/base': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/base',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/unpublish': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'contentType-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes`
 *
 * The collection of content types defined for this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}`
 *
 * The collection of content types defined for this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentType-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentType-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const addCopy = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/addCopy',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const addCopyFromContentTypeHub = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub`
   *
   * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a &#x27;push everywhere&#x27; to &#x27;pull as needed&#x27; approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const associateWithHubSites = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const base = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/base`
   *
   * Parent contentType from which this content type is derived.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/base']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/base']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/base',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const baseTypes = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes`
   *
   * The collection of content types that are ancestors of this content type.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}`
   *
   * The collection of content types that are ancestors of this content type.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id', 'contentType-id1'],
      },
      params,
    };
  },
};

export const columnLinks = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks`
   *
   * The collection of columns that are required by this content type.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   * The collection of columns that are required by this content type.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentType-id', 'columnLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
};

export const columnPositions = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions`
   *
   * Column order information in a content type.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
   *
   * Column order information in a content type.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};

export const copyToDefaultContentLocation = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const publish = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const unpublish = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/unpublish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/unpublish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/unpublish',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentType-id'],
      },
      params,
    };
  },
};
