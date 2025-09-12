import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/onenote/pages': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'put'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'delete'
  >;
  'POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'onenotePage-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/pages`
 *
 * The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'onenotePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'onenotePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const copyToSection = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const onenotePatchContent = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook`
   *
   * The notebook that contains the page.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const parentSection = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection`
   *
   * The section that contains the page. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'onenotePage-id'],
      },
      params,
    };
  },
};
