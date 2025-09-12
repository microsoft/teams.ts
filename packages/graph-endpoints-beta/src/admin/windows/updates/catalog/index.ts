import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/catalog': Operation<'/admin/windows/updates/catalog', 'delete'>;
  'GET /admin/windows/updates/catalog': Operation<'/admin/windows/updates/catalog', 'get'>;
  'PATCH /admin/windows/updates/catalog': Operation<'/admin/windows/updates/catalog', 'patch'>;
  'GET /admin/windows/updates/catalog/entries': Operation<
    '/admin/windows/updates/catalog/entries',
    'get'
  >;
  'POST /admin/windows/updates/catalog/entries': Operation<
    '/admin/windows/updates/catalog/entries',
    'post'
  >;
  'GET /admin/windows/updates/catalog/entries/{catalogEntry-id}': Operation<
    '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}': Operation<
    '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}': Operation<
    '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates/catalog`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/catalog']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows/updates/catalog']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/catalog',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/catalog`
 *
 * Catalog of content that can be approved for deployment by Windows Autopatch. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/catalog']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/catalog']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/catalog',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/catalog`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/catalog']['body']
): EndpointRequest<IEndpoints['PATCH /admin/windows/updates/catalog']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/catalog',
    body,
  };
}

export const entries = {
  /**
   * `GET /admin/windows/updates/catalog/entries`
   *
   * Get a list of catalogEntry resources from the catalog. Currently, this operation returns entries of the featureUpdateCatalogEntry or qualityUpdateCatalog types, inherited from catalogEntry.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/catalog/entries']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/windows/updates/catalog/entries']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/catalog/entries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/catalog/entries`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/catalog/entries']['body']
  ): EndpointRequest<IEndpoints['POST /admin/windows/updates/catalog/entries']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/catalog/entries',
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/catalog/entries/{catalogEntry-id}`
   *
   * Lists the content that you can approve for deployment. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/catalog/entries/{catalogEntry-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/catalog/entries/{catalogEntry-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['catalogEntry-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
      paramDefs: {
        path: ['catalogEntry-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['catalogEntry-id'],
      },
      params,
    };
  },
};
