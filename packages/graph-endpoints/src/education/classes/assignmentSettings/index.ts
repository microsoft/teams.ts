import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignmentSettings': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentSettings': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings',
    'patch'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    'delete'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignmentSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationClass-id'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentSettings`
 *
 * Specifies class-level assignments settings.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: {
      path: ['educationClass-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignmentSettings`
 *
 * Update the properties of an educationAssignmentSettings object. Only teachers can update these settings.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: {
      path: ['educationClass-id'],
    },
    params,
    body,
  };
}

export const gradingCategories = {
  /**
   * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories`
   *
   * When set, enables users to weight assignments differently when computing a class average grade.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['response']
  > {
    return {
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
      paramDefs: {
        path: ['educationClass-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}`
   *
   * When set, enables users to weight assignments differently when computing a class average grade.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationGradingCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}`
   *
   * Update a single gradingCategory on the educationAssignmentSettings. Only teachers can perform this operation.
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
      paramDefs: {
        path: ['educationClass-id', 'educationGradingCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationClass-id', 'educationGradingCategory-id'],
      },
      params,
    };
  },
};
