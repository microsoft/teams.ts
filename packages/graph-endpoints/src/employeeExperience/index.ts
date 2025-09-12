export * as communities from './communities';
export * as learningProviders from './learningProviders';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience': Operation<'/employeeExperience', 'get'>;
  'PATCH /employeeExperience': Operation<'/employeeExperience', 'patch'>;
  'GET /employeeExperience/engagementAsyncOperations': Operation<
    '/employeeExperience/engagementAsyncOperations',
    'get'
  >;
  'POST /employeeExperience/engagementAsyncOperations': Operation<
    '/employeeExperience/engagementAsyncOperations',
    'post'
  >;
  'GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}': Operation<
    '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    'get'
  >;
  'PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}': Operation<
    '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    'patch'
  >;
  'DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}': Operation<
    '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    'delete'
  >;
  'GET /employeeExperience/learningCourseActivities': Operation<
    '/employeeExperience/learningCourseActivities',
    'get'
  >;
  'POST /employeeExperience/learningCourseActivities': Operation<
    '/employeeExperience/learningCourseActivities',
    'post'
  >;
  'GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'patch'
  >;
  'DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
    'delete'
  >;
}

/**
 * `GET /employeeExperience`
 *
 */
export function get(
  params?: IEndpoints['GET /employeeExperience']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience']['response']> {
  return {
    method: 'get',
    path: '/employeeExperience',
    paramDefs: {
      query: ['$select'],
    },
    params,
  };
}

/**
 * `PATCH /employeeExperience`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience']['body']
): EndpointRequest<IEndpoints['PATCH /employeeExperience']['response']> {
  return {
    method: 'patch',
    path: '/employeeExperience',
    body,
  };
}

export const engagementAsyncOperations = {
  /**
   * `GET /employeeExperience/engagementAsyncOperations`
   *
   * Get an engagementAsyncOperation to track a long-running operation request.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/engagementAsyncOperations']['parameters']
  ): EndpointRequest<IEndpoints['GET /employeeExperience/engagementAsyncOperations']['response']> {
    return {
      method: 'get',
      path: '/employeeExperience/engagementAsyncOperations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /employeeExperience/engagementAsyncOperations`
   *
   */
  create: function create(
    body: IEndpoints['POST /employeeExperience/engagementAsyncOperations']['body']
  ): EndpointRequest<IEndpoints['POST /employeeExperience/engagementAsyncOperations']['response']> {
    return {
      method: 'post',
      path: '/employeeExperience/engagementAsyncOperations',
      body,
    };
  },
  /**
   * `GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}`
   *
   * Get an engagementAsyncOperation to track a long-running operation request.
   */
  get: function get(
    params?: IEndpoints['GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['engagementAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
      paramDefs: {
        path: ['engagementAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['engagementAsyncOperation-id'],
      },
      params,
    };
  },
};

export const learningCourseActivities = {
  /**
   * `GET /employeeExperience/learningCourseActivities`
   *
   * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/learningCourseActivities']['parameters']
  ): EndpointRequest<IEndpoints['GET /employeeExperience/learningCourseActivities']['response']> {
    return {
      method: 'get',
      path: '/employeeExperience/learningCourseActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /employeeExperience/learningCourseActivities`
   *
   */
  create: function create(
    body: IEndpoints['POST /employeeExperience/learningCourseActivities']['body']
  ): EndpointRequest<IEndpoints['POST /employeeExperience/learningCourseActivities']['response']> {
    return {
      method: 'post',
      path: '/employeeExperience/learningCourseActivities',
      body,
    };
  },
  /**
   * `GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
   *
   * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
   */
  get: function get(
    params?: IEndpoints['GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      method: 'get',
      path: '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['learningCourseActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['body'],
    params?: IEndpoints['PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        path: ['learningCourseActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /employeeExperience/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/employeeExperience/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['learningCourseActivity-id'],
      },
      params,
    };
  },
};
