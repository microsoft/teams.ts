export * as columns from './columns';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes',
    'post'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/addCopy',
    'post'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub',
    'post'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish',
    'post'
  >;
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id', 'contentType-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/contentTypes`
 *
 * The collection of content types present in this list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes',
    paramDefs: {
      path: ['site-id', 'list-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
 *
 * The collection of content types present in this list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'contentType-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'contentType-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes',
    paramDefs: {
      path: ['site-id', 'list-id'],
    },
    params,
    body,
  };
}

export const addCopy = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/addCopy',
      paramDefs: {
        path: ['site-id', 'list-id'],
      },
      params,
      body,
    };
  },
};

export const addCopyFromContentTypeHub = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub`
   *
   * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a &#x27;push everywhere&#x27; to &#x27;pull as needed&#x27; approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub',
      paramDefs: {
        path: ['site-id', 'list-id'],
      },
      params,
      body,
    };
  },
};

export const associateWithHubSites = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites',
      paramDefs: {
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const base = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base`
   *
   * Parent contentType from which this content type is derived.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const baseTypes = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes`
   *
   * The collection of content types that are ancestors of this content type.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}`
   *
   * The collection of content types that are ancestors of this content type.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id', 'contentType-id1'],
      },
      params,
    };
  },
};

export const columnLinks = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks`
   *
   * The collection of columns that are required by this content type.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
      paramDefs: {
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   * The collection of columns that are required by this content type.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        path: ['site-id', 'list-id', 'contentType-id', 'columnLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id', 'list-id', 'contentType-id', 'columnLink-id'],
      },
      params,
    };
  },
};

export const columnPositions = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions`
   *
   * Column order information in a content type.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
    };
  },
  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
   *
   * Column order information in a content type.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id', 'contentType-id', 'columnDefinition-id'],
      },
      params,
    };
  },
};

export const copyToDefaultContentLocation = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
      paramDefs: {
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
      body,
    };
  },
};

export const publish = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish',
      paramDefs: {
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
    };
  },
};

export const unpublish = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish`
   *
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish',
      paramDefs: {
        path: ['site-id', 'list-id', 'contentType-id'],
      },
      params,
    };
  },
};
