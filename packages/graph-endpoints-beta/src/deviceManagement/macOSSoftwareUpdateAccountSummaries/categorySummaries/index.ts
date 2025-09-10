import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}',
    'delete'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries',
    'get'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}',
    'patch'
  >;
  'POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries',
    'post'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
    'get'
  >;
  'POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
    'post'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['macOSSoftwareUpdateAccountSummary-id', 'macOSSoftwareUpdateCategorySummary-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries`
 *
 * Summary of the updates by category.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries',
    paramDefs: {
      path: ['macOSSoftwareUpdateAccountSummary-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}`
 *
 * Summary of the updates by category.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}',
    paramDefs: {
      path: ['macOSSoftwareUpdateAccountSummary-id', 'macOSSoftwareUpdateCategorySummary-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}',
    paramDefs: {
      path: ['macOSSoftwareUpdateAccountSummary-id', 'macOSSoftwareUpdateCategorySummary-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries',
    paramDefs: {
      path: ['macOSSoftwareUpdateAccountSummary-id'],
    },
    params,
    body,
  };
}

export const updateStateSummaries = {
  /**
   * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries`
   *
   * Summary of the update states.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['macOSSoftwareUpdateAccountSummary-id', 'macOSSoftwareUpdateCategorySummary-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['body'],
    params?: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
      paramDefs: {
        path: ['macOSSoftwareUpdateAccountSummary-id', 'macOSSoftwareUpdateCategorySummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}`
   *
   * Summary of the update states.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'macOSSoftwareUpdateAccountSummary-id',
          'macOSSoftwareUpdateCategorySummary-id',
          'macOSSoftwareUpdateStateSummary-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
      paramDefs: {
        path: [
          'macOSSoftwareUpdateAccountSummary-id',
          'macOSSoftwareUpdateCategorySummary-id',
          'macOSSoftwareUpdateStateSummary-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'macOSSoftwareUpdateAccountSummary-id',
          'macOSSoftwareUpdateCategorySummary-id',
          'macOSSoftwareUpdateStateSummary-id',
        ],
      },
      params,
    };
  },
};
