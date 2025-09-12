import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /search': Operation<'/search', 'get'>;
  'PATCH /search': Operation<'/search', 'patch'>;
  'GET /search/acronyms': Operation<'/search/acronyms', 'get'>;
  'POST /search/acronyms': Operation<'/search/acronyms', 'post'>;
  'GET /search/acronyms/{acronym-id}': Operation<'/search/acronyms/{acronym-id}', 'get'>;
  'PATCH /search/acronyms/{acronym-id}': Operation<'/search/acronyms/{acronym-id}', 'patch'>;
  'DELETE /search/acronyms/{acronym-id}': Operation<'/search/acronyms/{acronym-id}', 'delete'>;
  'GET /search/bookmarks': Operation<'/search/bookmarks', 'get'>;
  'POST /search/bookmarks': Operation<'/search/bookmarks', 'post'>;
  'GET /search/bookmarks/{bookmark-id}': Operation<'/search/bookmarks/{bookmark-id}', 'get'>;
  'PATCH /search/bookmarks/{bookmark-id}': Operation<'/search/bookmarks/{bookmark-id}', 'patch'>;
  'DELETE /search/bookmarks/{bookmark-id}': Operation<'/search/bookmarks/{bookmark-id}', 'delete'>;
  'GET /search/qnas': Operation<'/search/qnas', 'get'>;
  'POST /search/qnas': Operation<'/search/qnas', 'post'>;
  'GET /search/qnas/{qna-id}': Operation<'/search/qnas/{qna-id}', 'get'>;
  'PATCH /search/qnas/{qna-id}': Operation<'/search/qnas/{qna-id}', 'patch'>;
  'DELETE /search/qnas/{qna-id}': Operation<'/search/qnas/{qna-id}', 'delete'>;
  'POST /search/query': Operation<'/search/query', 'post'>;
}

/**
 * `GET /search`
 *
 */
export function get(
  params?: IEndpoints['GET /search']['parameters']
): EndpointRequest<IEndpoints['GET /search']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/search',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /search`
 *
 */
export function update(
  body: IEndpoints['PATCH /search']['body']
): EndpointRequest<IEndpoints['PATCH /search']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/search',
    body,
  };
}

export const acronyms = {
  /**
   * `GET /search/acronyms`
   *
   * Get a list of the acronym objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /search/acronyms']['parameters']
  ): EndpointRequest<IEndpoints['GET /search/acronyms']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/search/acronyms',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /search/acronyms`
   *
   * Create a new acronym object.
   */
  create: function create(
    body: IEndpoints['POST /search/acronyms']['body']
  ): EndpointRequest<IEndpoints['POST /search/acronyms']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/search/acronyms',
      body,
    };
  },
  /**
   * `GET /search/acronyms/{acronym-id}`
   *
   * Read the properties and relationships of an acronym object.
   */
  get: function get(
    params?: IEndpoints['GET /search/acronyms/{acronym-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /search/acronyms/{acronym-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/search/acronyms/{acronym-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['acronym-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /search/acronyms/{acronym-id}`
   *
   * Update the properties of an acronym object.
   */
  update: function update(
    body: IEndpoints['PATCH /search/acronyms/{acronym-id}']['body'],
    params?: IEndpoints['PATCH /search/acronyms/{acronym-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /search/acronyms/{acronym-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/search/acronyms/{acronym-id}',
      paramDefs: {
        path: ['acronym-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /search/acronyms/{acronym-id}`
   *
   * Delete an acronym object.
   */
  del: function del(
    params?: IEndpoints['DELETE /search/acronyms/{acronym-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /search/acronyms/{acronym-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/search/acronyms/{acronym-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['acronym-id'],
      },
      params,
    };
  },
};

export const bookmarks = {
  /**
   * `GET /search/bookmarks`
   *
   * Get a list of bookmark objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /search/bookmarks']['parameters']
  ): EndpointRequest<IEndpoints['GET /search/bookmarks']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/search/bookmarks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /search/bookmarks`
   *
   * Create a new bookmark object.
   */
  create: function create(
    body: IEndpoints['POST /search/bookmarks']['body']
  ): EndpointRequest<IEndpoints['POST /search/bookmarks']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/search/bookmarks',
      body,
    };
  },
  /**
   * `GET /search/bookmarks/{bookmark-id}`
   *
   * Read the properties and relationships of a bookmark object.
   */
  get: function get(
    params?: IEndpoints['GET /search/bookmarks/{bookmark-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /search/bookmarks/{bookmark-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/search/bookmarks/{bookmark-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookmark-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /search/bookmarks/{bookmark-id}`
   *
   * Update the properties of a bookmark object.
   */
  update: function update(
    body: IEndpoints['PATCH /search/bookmarks/{bookmark-id}']['body'],
    params?: IEndpoints['PATCH /search/bookmarks/{bookmark-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /search/bookmarks/{bookmark-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/search/bookmarks/{bookmark-id}',
      paramDefs: {
        path: ['bookmark-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /search/bookmarks/{bookmark-id}`
   *
   * Delete a bookmark object.
   */
  del: function del(
    params?: IEndpoints['DELETE /search/bookmarks/{bookmark-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /search/bookmarks/{bookmark-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/search/bookmarks/{bookmark-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookmark-id'],
      },
      params,
    };
  },
};

export const qnas = {
  /**
   * `GET /search/qnas`
   *
   * Get a list of the qna objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /search/qnas']['parameters']
  ): EndpointRequest<IEndpoints['GET /search/qnas']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/search/qnas',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /search/qnas`
   *
   * Create a new qna object.
   */
  create: function create(
    body: IEndpoints['POST /search/qnas']['body']
  ): EndpointRequest<IEndpoints['POST /search/qnas']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/search/qnas',
      body,
    };
  },
  /**
   * `GET /search/qnas/{qna-id}`
   *
   * Read the properties and relationships of a qna object.
   */
  get: function get(
    params?: IEndpoints['GET /search/qnas/{qna-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /search/qnas/{qna-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/search/qnas/{qna-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['qna-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /search/qnas/{qna-id}`
   *
   * Update the properties of a qna object.
   */
  update: function update(
    body: IEndpoints['PATCH /search/qnas/{qna-id}']['body'],
    params?: IEndpoints['PATCH /search/qnas/{qna-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /search/qnas/{qna-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/search/qnas/{qna-id}',
      paramDefs: {
        path: ['qna-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /search/qnas/{qna-id}`
   *
   * Delete a qna object.
   */
  del: function del(
    params?: IEndpoints['DELETE /search/qnas/{qna-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /search/qnas/{qna-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/search/qnas/{qna-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['qna-id'],
      },
      params,
    };
  },
};

export const query = {
  /**
   * `POST /search/query`
   *
   * Run a specified search query. Search results are provided in the response.
   */
  create: function create(
    body: IEndpoints['POST /search/query']['body']
  ): EndpointRequest<IEndpoints['POST /search/query']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/search/query',
      body,
    };
  },
};
