import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    'post'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
    'get'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
    'post'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    'patch'
  >;
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}',
    'get'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}`
 *
 * Delete an ediscoverySearch object.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
    },
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches`
 *
 * Get the list of ediscoverySearch resources from an eDiscoveryCase object.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    paramDefs: {
      path: ['ediscoveryCase-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}`
 *
 * Read the properties and relationships of an ediscoverySearch object.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    paramDefs: {
      path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}`
 *
 * Update the properties of an ediscoverySearch object.
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    paramDefs: {
      path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches`
 *
 * Create a new ediscoverySearch object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['response']
> {
  return {
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    paramDefs: {
      path: ['ediscoveryCase-id'],
    },
    params,
    body,
  };
}

export const addToReviewSetOperation = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation`
   *
   * Adds the results of the eDiscovery search to the specified reviewSet.
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      },
      params,
    };
  },
};

export const additionalSources = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources`
   *
   * Get the list of additional sources associated with an eDiscovery search.
   */
  list: function list(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources`
   *
   * Create a new additional source associated with an eDiscovery search.
   */
  create: function create(
    body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['body'],
    params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['response']
  > {
    return {
      method: 'post',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
      paramDefs: {
        path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}`
   *
   * Adds an additional source to the eDiscovery search.
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id', 'dataSource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['body'],
    params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
      paramDefs: {
        path: ['ediscoveryCase-id', 'ediscoverySearch-id', 'dataSource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id', 'dataSource-id'],
      },
      params,
    };
  },
};

export const custodianSources = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources`
   *
   * Get the list of custodial data sources associated with an eDiscovery search.
   */
  list: function list(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}`
   *
   * Custodian sources that are included in the eDiscovery search.
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id', 'dataSource-id'],
      },
      params,
    };
  },
};

export const lastEstimateStatisticsOperation = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation`
   *
   * Get the last  ediscoveryEstimateOperation objects and their properties.
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      },
      params,
    };
  },
};

export const noncustodialSources = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources`
   *
   * noncustodialDataSource sources that are included in the eDiscovery search
   */
  list: function list(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}`
   *
   * noncustodialDataSource sources that are included in the eDiscovery search
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoverySearch-id', 'ediscoveryNoncustodialDataSource-id'],
      },
      params,
    };
  },
};
