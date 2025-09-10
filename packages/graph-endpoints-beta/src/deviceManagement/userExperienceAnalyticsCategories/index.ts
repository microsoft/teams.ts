import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsCategories': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsCategories': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['userExperienceAnalyticsCategory-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsCategories`
 *
 * User experience analytics categories
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsCategories',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}`
 *
 * User experience analytics categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    paramDefs: {
      path: ['userExperienceAnalyticsCategory-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    paramDefs: {
      path: ['userExperienceAnalyticsCategory-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsCategories',
    body,
  };
}

export const metricValues = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues`
   *
   * The metric values for the user experience analytics category. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['userExperienceAnalyticsCategory-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues']['body'],
    params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues',
      paramDefs: {
        path: ['userExperienceAnalyticsCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}`
   *
   * The metric values for the user experience analytics category. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsCategory-id', 'userExperienceAnalyticsMetric-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsCategory-id', 'userExperienceAnalyticsMetric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}/metricValues/{userExperienceAnalyticsMetric-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsCategory-id', 'userExperienceAnalyticsMetric-id'],
      },
      params,
    };
  },
};
