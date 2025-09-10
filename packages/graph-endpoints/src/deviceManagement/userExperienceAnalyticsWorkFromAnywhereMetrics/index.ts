import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['userExperienceAnalyticsWorkFromAnywhereMetric-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics`
 *
 * User experience analytics work from anywhere metrics.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}`
 *
 * User experience analytics work from anywhere metrics.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}',
    paramDefs: {
      path: ['userExperienceAnalyticsWorkFromAnywhereMetric-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}',
    paramDefs: {
      path: ['userExperienceAnalyticsWorkFromAnywhereMetric-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics',
    body,
  };
}

export const metricDevices = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices`
   *
   * The work from anywhere metric devices. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['userExperienceAnalyticsWorkFromAnywhereMetric-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['body'],
    params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices',
      paramDefs: {
        path: ['userExperienceAnalyticsWorkFromAnywhereMetric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}`
   *
   * The work from anywhere metric devices. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'userExperienceAnalyticsWorkFromAnywhereMetric-id',
          'userExperienceAnalyticsWorkFromAnywhereDevice-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
      paramDefs: {
        path: [
          'userExperienceAnalyticsWorkFromAnywhereMetric-id',
          'userExperienceAnalyticsWorkFromAnywhereDevice-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric-id}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'userExperienceAnalyticsWorkFromAnywhereMetric-id',
          'userExperienceAnalyticsWorkFromAnywhereDevice-id',
        ],
      },
      params,
    };
  },
};
