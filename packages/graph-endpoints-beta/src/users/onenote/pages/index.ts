import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/pages/{onenotePage-id}': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/pages': Operation<'/users/{user-id}/onenote/pages', 'get'>;
  'GET /users/{user-id}/onenote/pages/{onenotePage-id}': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/pages/{onenotePage-id}': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/pages': Operation<'/users/{user-id}/onenote/pages', 'post'>;
  'GET /users/{user-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/content',
    'put'
  >;
  'DELETE /users/{user-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/content',
    'delete'
  >;
  'POST /users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
  'POST /users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
  'GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
  'GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentSection': Operation<
    '/users/{user-id}/onenote/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'onenotePage-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/pages`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/pages',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['user-id', 'onenotePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['user-id', 'onenotePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/pages']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/pages',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /users/{user-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['user-id', 'onenotePage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['user-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const copyToSection = {
  /**
   * `POST /users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection']['body'],
    params?: IEndpoints['POST /users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/copyToSection',
      paramDefs: {
        path: ['user-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const onenotePatchContent = {
  /**
   * `POST /users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['body'],
    params?: IEndpoints['POST /users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
      paramDefs: {
        path: ['user-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook`
   *
   * The notebook that contains the page.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const parentSection = {
  /**
   * `GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentSection`
   *
   * The section that contains the page. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentSection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/pages/{onenotePage-id}/parentSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onenote/pages/{onenotePage-id}/parentSection',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'onenotePage-id'],
      },
      params,
    };
  },
};
