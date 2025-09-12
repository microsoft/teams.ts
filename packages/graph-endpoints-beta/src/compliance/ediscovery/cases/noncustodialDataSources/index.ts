import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/noncustodialDataSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation',
    'get'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'noncustodialDataSource-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources`
 *
 * Get a list of the noncustodialDataSource objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources',
    paramDefs: {
      path: ['case-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}`
 *
 * Read the properties and relationships of a noncustodialDataSource object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}',
    paramDefs: {
      path: ['case-id', 'noncustodialDataSource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}',
    paramDefs: {
      path: ['case-id', 'noncustodialDataSource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/noncustodialDataSources`
 *
 * Create a new noncustodialDataSource object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/noncustodialDataSources']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/noncustodialDataSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/noncustodialDataSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

export const dataSource = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource`
   *
   * User source or SharePoint site data source as noncustodial data source.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'noncustodialDataSource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
      paramDefs: {
        path: ['case-id', 'noncustodialDataSource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id', 'noncustodialDataSource-id'],
      },
      params,
    };
  },
};

export const lastIndexOperation = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'noncustodialDataSource-id'],
      },
      params,
    };
  },
};
