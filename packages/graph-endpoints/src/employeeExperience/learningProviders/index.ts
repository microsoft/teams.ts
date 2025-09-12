import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/learningProviders/{learningProvider-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}',
    'delete'
  >;
  'GET /employeeExperience/learningProviders': Operation<
    '/employeeExperience/learningProviders',
    'get'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningProviders/{learningProvider-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}',
    'patch'
  >;
  'POST /employeeExperience/learningProviders': Operation<
    '/employeeExperience/learningProviders',
    'post'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
    'get'
  >;
  'POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
    'post'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    'patch'
  >;
  'DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
    'delete'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
    'get'
  >;
  'POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
    'post'
  >;
  'GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    'get'
  >;
  'PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    'patch'
  >;
  'DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}': Operation<
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
    'delete'
  >;
}

/**
 * `DELETE /employeeExperience/learningProviders/{learningProvider-id}`
 *
 * Delete a learningProvider resource and remove its registration in Viva Learning for a tenant.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}']['response']
> {
  return {
    method: 'delete',
    path: '/employeeExperience/learningProviders/{learningProvider-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['learningProvider-id'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders`
 *
 * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/learningProviders']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/learningProviders']['response']> {
  return {
    method: 'get',
    path: '/employeeExperience/learningProviders',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/learningProviders/{learningProvider-id}`
 *
 * Read the properties and relationships of a learningProvider object.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}']['response']
> {
  return {
    method: 'get',
    path: '/employeeExperience/learningProviders/{learningProvider-id}',
    paramDefs: {
      path: ['learningProvider-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /employeeExperience/learningProviders/{learningProvider-id}`
 *
 * Update the properties of a learningProvider object.
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['response']
> {
  return {
    method: 'patch',
    path: '/employeeExperience/learningProviders/{learningProvider-id}',
    paramDefs: {
      path: ['learningProvider-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/learningProviders`
 *
 * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
 */
export function create(
  body: IEndpoints['POST /employeeExperience/learningProviders']['body']
): EndpointRequest<IEndpoints['POST /employeeExperience/learningProviders']['response']> {
  return {
    method: 'post',
    path: '/employeeExperience/learningProviders',
    body,
  };
}

export const learningContents = {
  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents`
   *
   * Get a list of the learningContent resources and their properties. This list represents the metadata of the specified provider&#x27;s content in Viva Learning.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['response']
  > {
    return {
      method: 'get',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['learningProvider-id'],
      },
      params,
    };
  },
  /**
   * `POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['body'],
    params?: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['response']
  > {
    return {
      method: 'post',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
      paramDefs: {
        path: ['learningProvider-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
   *
   * Get the specified learningContent resource which represents the metadata of the specified provider&#x27;s ingested content.
   */
  get: function get(
    params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['learningProvider-id', 'learningContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['body'],
    params?: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
      paramDefs: {
        path: ['learningProvider-id', 'learningContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
   *
   * Delete the specified learningContent resource that represents the metadata of the specified provider&#x27;s ingested content.
   */
  del: function del(
    params?: IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['learningProvider-id', 'learningContent-id'],
      },
      params,
    };
  },
};

export const learningCourseActivities = {
  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
   *
   * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
   */
  list: function list(
    params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['response']
  > {
    return {
      method: 'get',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['learningProvider-id'],
      },
      params,
    };
  },
  /**
  * `POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
  *
  * Create a new learningCourseActivity object. A learning course activity can be one of two types: 
- Assignment
- Self-initiated Use this method to create either type of activity.
  */
  create: function create(
    body: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['body'],
    params?: IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['response']
  > {
    return {
      method: 'post',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
      paramDefs: {
        path: ['learningProvider-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      method: 'get',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['learningProvider-id', 'learningCourseActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
   *
   * Update the properties of a learningCourseActivity object.
   */
  update: function update(
    body: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['body'],
    params?: IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        path: ['learningProvider-id', 'learningCourseActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
   *
   * Delete a learningCourseActivity object using the course activity ID of either an assignment or a self-initiated activity.
   */
  del: function del(
    params?: IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['learningProvider-id', 'learningCourseActivity-id'],
      },
      params,
    };
  },
};
