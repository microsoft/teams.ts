import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBaselines': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics': Operation<
    '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['userExperienceAnalyticsBaseline-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines`
 *
 * User experience analytics baselines
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}`
 *
 * User experience analytics baselines
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    paramDefs: {
      path: ['userExperienceAnalyticsBaseline-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}',
    paramDefs: {
      path: ['userExperienceAnalyticsBaseline-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBaselines`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBaselines']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBaselines']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBaselines',
    body,
  };
}

export const appHealthMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics`
   *
   * The scores and insights for the application health metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/appHealthMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};

export const batteryHealthMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics`
   *
   * The scores and insights for the battery health metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/batteryHealthMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};

export const bestPracticesMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics`
   *
   * The scores and insights for the best practices metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/bestPracticesMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};

export const deviceBootPerformanceMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics`
   *
   * The scores and insights for the device boot performance metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/deviceBootPerformanceMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};

export const rebootAnalyticsMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics`
   *
   * The scores and insights for the reboot analytics metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/rebootAnalyticsMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};

export const resourcePerformanceMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics`
   *
   * The scores and insights for the resource performance metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/resourcePerformanceMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};

export const workFromAnywhereMetrics = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics`
   *
   * The scores and insights for the work from anywhere metrics.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline-id}/workFromAnywhereMetrics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBaseline-id'],
      },
      params,
    };
  },
};
