import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages',
    'post'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
    'put'
  >;
  'DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
    'delete'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages`
 *
 * The collection of pages in the section.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages',
    paramDefs: {
      path: ['notebook-id', 'onenoteSection-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 * The collection of pages in the section.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: {
      path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: {
      path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages',
    paramDefs: {
      path: ['notebook-id', 'onenoteSection-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  set: function set(
    body: IEndpoints['PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['body'],
    params?: IEndpoints['PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const copyToSection = {
  /**
   * `POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection']['body'],
    params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection',
      paramDefs: {
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const onenotePatchContent = {
  /**
   * `POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['body'],
    params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent',
      paramDefs: {
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook`
   *
   * The notebook that contains the page.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const parentSection = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection`
   *
   * The section that contains the page. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
};
