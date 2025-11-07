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
  'GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme',
    'get'
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
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
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
    ver: 'beta',
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
 * Read the properties and relationships of an educationAssignmentSettings object. Only teachers can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: {
      path: ['educationClass-id'],
    },
    params,
    body,
  };
}

export const defaultGradingScheme = {
  /**
   * `GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme`
   *
   * The default grading scheme for assignments created in this class.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentSettings/defaultGradingScheme',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};

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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const gradingSchemes = {
  /**
   * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes`
   *
   * Read the properties and relationships of an educationGradingScheme object.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes`
   *
   * Create a new educationGradingScheme on an educationClass. Only teachers can perform this operation.
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
      paramDefs: {
        path: ['educationClass-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}`
   *
   * Read the properties and relationships of an educationGradingScheme object.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationGradingScheme-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
      paramDefs: {
        path: ['educationClass-id', 'educationGradingScheme-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}`
   *
   * Delete an educationGradingScheme object.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationClass-id', 'educationGradingScheme-id'],
      },
      params,
    };
  },
};
