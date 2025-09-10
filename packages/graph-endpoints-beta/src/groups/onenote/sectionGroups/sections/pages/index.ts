import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages',
    'get'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages',
    'post'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
    'put'
  >;
  'DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
    'delete'
  >;
  'POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
  'POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages`
 *
 * The collection of pages in the section.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages',
    paramDefs: {
      path: ['group-id', 'sectionGroup-id', 'onenoteSection-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 * The collection of pages in the section.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: {
      path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: {
      path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages',
    paramDefs: {
      path: ['group-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
      paramDefs: {
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const copyToSection = {
  /**
   * `POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection`
   *
   * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection']['body'],
    params?: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection',
      paramDefs: {
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const onenotePatchContent = {
  /**
   * `POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['body'],
    params?: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent',
      paramDefs: {
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook`
   *
   * The notebook that contains the page.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
};

export const parentSection = {
  /**
   * `GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection`
   *
   * The section that contains the page. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'sectionGroup-id', 'onenoteSection-id', 'onenotePage-id'],
      },
      params,
    };
  },
};
