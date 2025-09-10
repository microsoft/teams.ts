import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/pages/{onenotePage-id}': Operation<
    '/me/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /me/onenote/pages': Operation<'/me/onenote/pages', 'get'>;
  'GET /me/onenote/pages/{onenotePage-id}': Operation<'/me/onenote/pages/{onenotePage-id}', 'get'>;
  'PATCH /me/onenote/pages/{onenotePage-id}': Operation<
    '/me/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /me/onenote/pages': Operation<'/me/onenote/pages', 'post'>;
  'GET /me/onenote/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /me/onenote/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/pages/{onenotePage-id}/content',
    'put'
  >;
  'DELETE /me/onenote/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/pages/{onenotePage-id}/content',
    'delete'
  >;
  'POST /me/onenote/pages/{onenotePage-id}/copyToSection': Operation<
    '/me/onenote/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
  'POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/me/onenote/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
  'GET /me/onenote/pages/{onenotePage-id}/parentNotebook': Operation<
    '/me/onenote/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
  'GET /me/onenote/pages/{onenotePage-id}/parentSection': Operation<
    '/me/onenote/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `DELETE /me/onenote/pages/{onenotePage-id}`
 *
 * Delete a OneNote page.
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onenotePage-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/pages`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/pages',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['onenotePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['onenotePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/pages']['body']
): EndpointRequest<IEndpoints['POST /me/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/pages',
    body,
  };
}

export const content = {
  /**
   * `GET /me/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/onenote/pages/{onenotePage-id}/content']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['onenotePage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onenote/pages/{onenotePage-id}/content`
   *
   * Update the content of a OneNote page.
   */
  set: function set(
    body: IEndpoints['PUT /me/onenote/pages/{onenotePage-id}/content']['body'],
    params?: IEndpoints['PUT /me/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<IEndpoints['PUT /me/onenote/pages/{onenotePage-id}/content']['response']> {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['onenotePage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}/content']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['onenotePage-id'],
      },
      params,
    };
  },
};

export const copyToSection = {
  /**
   * `POST /me/onenote/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/copyToSection']['body'],
    params?: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/copyToSection']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/pages/{onenotePage-id}/copyToSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/pages/{onenotePage-id}/copyToSection',
      paramDefs: {
        path: ['onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const onenotePatchContent = {
  /**
   * `POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent']['body'],
    params?: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/pages/{onenotePage-id}/onenotePatchContent',
      paramDefs: {
        path: ['onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /me/onenote/pages/{onenotePage-id}/parentNotebook`
   *
   * The notebook that contains the page.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/pages/{onenotePage-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/pages/{onenotePage-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onenotePage-id'],
      },
      params,
    };
  },
};

export const parentSection = {
  /**
   * `GET /me/onenote/pages/{onenotePage-id}/parentSection`
   *
   * The section that contains the page. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}/parentSection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/pages/{onenotePage-id}/parentSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/pages/{onenotePage-id}/parentSection',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onenotePage-id'],
      },
      params,
    };
  },
};
