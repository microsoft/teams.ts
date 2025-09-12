import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/pages': Operation<'/sites/{site-id}/onenote/pages', 'get'>;
  'GET /sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/pages': Operation<'/sites/{site-id}/onenote/pages', 'post'>;
  'GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'put'
  >;
  'POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
  'POST /sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
  'GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
  'GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'onenotePage-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/pages`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/pages',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['site-id', 'onenotePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: {
      path: ['site-id', 'onenotePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/pages']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/pages',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['site-id', 'onenotePage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  set: function set(
    body: IEndpoints['PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['body'],
    params?: IEndpoints['PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['site-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const copyToSection = {
  /**
   * `POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
      paramDefs: {
        path: ['site-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const onenotePatchContent = {
  /**
   * `POST /sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
      paramDefs: {
        path: ['site-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook`
   *
   * The notebook that contains the page.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const parentSection = {
  /**
   * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection`
   *
   * The section that contains the page. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'onenotePage-id'],
      },
      params,
    };
  },
};
