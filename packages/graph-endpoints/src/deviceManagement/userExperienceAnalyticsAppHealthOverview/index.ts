import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    'patch'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthOverview`
 *
 * User experience analytics appHealth overview
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview']['body']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview',
    body,
  };
}

export const metricValues = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues`
   *
   * The metric values for the user experience analytics category. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}`
   *
   * The metric values for the user experience analytics category. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsMetric-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsMetric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues/{userExperienceAnalyticsMetric-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsMetric-id'],
      },
      params,
    };
  },
};
