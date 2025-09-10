import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    'delete'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists': Operation<
    '/admin/edge/internetExplorerMode/siteLists',
    'get'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    'get'
  >;
  'PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    'patch'
  >;
  'POST /admin/edge/internetExplorerMode/siteLists': Operation<
    '/admin/edge/internetExplorerMode/siteLists',
    'post'
  >;
  'POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish',
    'post'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies',
    'get'
  >;
  'POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies',
    'post'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}',
    'get'
  >;
  'PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}',
    'patch'
  >;
  'DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}',
    'delete'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
    'get'
  >;
  'POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
    'post'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    'get'
  >;
  'PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    'patch'
  >;
  'DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}`
 *
 * Delete a browserSiteList object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['browserSiteList-id'],
    },
    params,
  };
}

/**
 * `GET /admin/edge/internetExplorerMode/siteLists`
 *
 * Get a list of the browserSiteList objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists']['parameters']
): EndpointRequest<IEndpoints['GET /admin/edge/internetExplorerMode/siteLists']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/edge/internetExplorerMode/siteLists',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}`
 *
 * Get a browserSiteList that contains browserSite and browserSharedCookie resources.
 */
export function get(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    paramDefs: {
      path: ['browserSiteList-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}`
 *
 * Update the properties of a browserSiteList object.
 */
export function update(
  body: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['body'],
  params?: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    paramDefs: {
      path: ['browserSiteList-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/edge/internetExplorerMode/siteLists`
 *
 * Create a new browserSiteList object to support Internet Explorer mode.
 */
export function create(
  body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists']['body']
): EndpointRequest<IEndpoints['POST /admin/edge/internetExplorerMode/siteLists']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/edge/internetExplorerMode/siteLists',
    body,
  };
}

export const publish = {
  /**
   * `POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish`
   *
   * Publish the specified browserSiteList for devices to download.
   */
  create: function create(
    body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish']['body'],
    params?: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish',
      paramDefs: {
        path: ['browserSiteList-id'],
      },
      params,
      body,
    };
  },
};

export const sharedCookies = {
  /**
   * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies`
   *
   * Get a list of the browserSharedCookie objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['browserSiteList-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies`
   *
   * Create a new browserSharedCookie object in a browserSiteList.
   */
  create: function create(
    body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies']['body'],
    params?: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies',
      paramDefs: {
        path: ['browserSiteList-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}`
   *
   * Get a session cookie that can be shared between a Microsoft Edge process and an Internet Explorer process, while using Internet Explorer mode.
   */
  get: function get(
    params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['browserSiteList-id', 'browserSharedCookie-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}`
   *
   * Update the properties of a browserSharedCookie object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['body'],
    params?: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}',
      paramDefs: {
        path: ['browserSiteList-id', 'browserSharedCookie-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}`
   *
   * Delete a browserSharedCookie from a browserSiteList.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['browserSiteList-id', 'browserSharedCookie-id'],
      },
      params,
    };
  },
};

export const sites = {
  /**
   * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites`
   *
   * Get a list of the browserSite objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['browserSiteList-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites`
   *
   * Create a new browserSite object in a browserSiteList.
   */
  create: function create(
    body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['body'],
    params?: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
      paramDefs: {
        path: ['browserSiteList-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}`
   *
   * Get a browserSite that resides on a browserSiteList.
   */
  get: function get(
    params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['browserSiteList-id', 'browserSite-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}`
   *
   * Update the properties of a browserSite object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['body'],
    params?: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
      paramDefs: {
        path: ['browserSiteList-id', 'browserSite-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}`
   *
   * Delete a browserSite from a browserSiteList.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['browserSiteList-id', 'browserSite-id'],
      },
      params,
    };
  },
};
