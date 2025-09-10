import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/sourceCollections': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
    'get'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources/{dataSource-id}',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/lastEstimateStatisticsOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/lastEstimateStatisticsOperation',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}',
    'get'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}`
 *
 * Delete a sourceCollection object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'sourceCollection-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections`
 *
 * Get the list of sourceCollections from a case object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    paramDefs: {
      path: ['case-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}`
 *
 * Returns a list of sourceCollection objects associated with this case.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    paramDefs: {
      path: ['case-id', 'sourceCollection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}`
 *
 * Update the properties of a sourceCollection object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    paramDefs: {
      path: ['case-id', 'sourceCollection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/sourceCollections`
 *
 * Create a new sourceCollection object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

export const addToReviewSetOperation = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation`
   *
   * Get the last addToReviewSetOperation object associated with a source collection.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/addToReviewSetOperation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'sourceCollection-id'],
      },
      params,
    };
  },
};

export const additionalSources = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources`
   *
   * Get a list of additional dataSource objects associated with a source collection.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'sourceCollection-id'],
      },
      params,
    };
  },
  /**
   * `POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['body'],
    params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
      paramDefs: {
        path: ['case-id', 'sourceCollection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}`
   *
   * Adds an additional source to the sourceCollection.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'sourceCollection-id', 'dataSource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
      paramDefs: {
        path: ['case-id', 'sourceCollection-id', 'dataSource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id', 'sourceCollection-id', 'dataSource-id'],
      },
      params,
    };
  },
};

export const custodianSources = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources`
   *
   * Get the list of dataSource objects associated with a source collection.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'sourceCollection-id'],
      },
      params,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources/{dataSource-id}`
   *
   * Custodian sources that are included in the sourceCollection.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources/{dataSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/custodianSources/{dataSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'sourceCollection-id', 'dataSource-id'],
      },
      params,
    };
  },
};

export const lastEstimateStatisticsOperation = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/lastEstimateStatisticsOperation`
   *
   * Get the last estimateStatisticsOperation object associated with a source collection.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/lastEstimateStatisticsOperation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/lastEstimateStatisticsOperation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/lastEstimateStatisticsOperation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'sourceCollection-id'],
      },
      params,
    };
  },
};

export const noncustodialSources = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources`
   *
   * Get a list of noncustodialDataSource associated with a sourceCollection.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'sourceCollection-id'],
      },
      params,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}`
   *
   * noncustodialDataSource sources that are included in the sourceCollection
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'sourceCollection-id', 'noncustodialDataSource-id'],
      },
      params,
    };
  },
};
