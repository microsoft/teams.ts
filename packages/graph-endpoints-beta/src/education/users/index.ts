export * as assignments from './assignments';
export * as user from './user';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}': Operation<
    '/education/users/{educationUser-id}',
    'delete'
  >;
  'GET /education/users': Operation<'/education/users', 'get'>;
  'GET /education/users/{educationUser-id}': Operation<
    '/education/users/{educationUser-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}': Operation<
    '/education/users/{educationUser-id}',
    'patch'
  >;
  'POST /education/users': Operation<'/education/users', 'post'>;
  'GET /education/users/{educationUser-id}/classes': Operation<
    '/education/users/{educationUser-id}/classes',
    'get'
  >;
  'GET /education/users/{educationUser-id}/classes/{educationClass-id}': Operation<
    '/education/users/{educationUser-id}/classes/{educationClass-id}',
    'get'
  >;
  'GET /education/users/{educationUser-id}/rubrics': Operation<
    '/education/users/{educationUser-id}/rubrics',
    'get'
  >;
  'POST /education/users/{educationUser-id}/rubrics': Operation<
    '/education/users/{educationUser-id}/rubrics',
    'post'
  >;
  'GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}': Operation<
    '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}': Operation<
    '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    'patch'
  >;
  'DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}': Operation<
    '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/schools': Operation<
    '/education/users/{educationUser-id}/schools',
    'get'
  >;
  'GET /education/users/{educationUser-id}/schools/{educationSchool-id}': Operation<
    '/education/users/{educationUser-id}/schools/{educationSchool-id}',
    'get'
  >;
  'GET /education/users/{educationUser-id}/taughtClasses': Operation<
    '/education/users/{educationUser-id}/taughtClasses',
    'get'
  >;
  'GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}': Operation<
    '/education/users/{educationUser-id}/taughtClasses/{educationClass-id}',
    'get'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}`
 *
 * Delete a user.
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/users/{educationUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/users/{educationUser-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationUser-id'],
    },
    params,
  };
}

/**
 * `GET /education/users`
 *
 * Retrieve a list of user objects. These user objects will include education-specific properties.
 */
export function list(
  params?: IEndpoints['GET /education/users']['parameters']
): EndpointRequest<IEndpoints['GET /education/users']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}`
 *
 * Retrieve the properties and relationships of a user.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}',
    paramDefs: {
      path: ['educationUser-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}`
 *
 * Update the properties of an educationuser object.
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/users/{educationUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/users/{educationUser-id}',
    paramDefs: {
      path: ['educationUser-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/users`
 *
 * Create a new user.
 */
export function create(
  body: IEndpoints['POST /education/users']['body']
): EndpointRequest<IEndpoints['POST /education/users']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/users',
    body,
  };
}

export const classes = {
  /**
   * `GET /education/users/{educationUser-id}/classes`
   *
   * Classes to which the user belongs. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/classes']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/classes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/classes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id'],
      },
      params,
    };
  },
  /**
   * `GET /education/users/{educationUser-id}/classes/{educationClass-id}`
   *
   * Classes to which the user belongs. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/classes/{educationClass-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/classes/{educationClass-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/classes/{educationClass-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationClass-id'],
      },
      params,
    };
  },
};

export const rubrics = {
  /**
   * `GET /education/users/{educationUser-id}/rubrics`
   *
   * When set, the grading rubric attached to the assignment.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/rubrics']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/rubrics']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/rubrics',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/users/{educationUser-id}/rubrics`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/users/{educationUser-id}/rubrics']['body'],
    params?: IEndpoints['POST /education/users/{educationUser-id}/rubrics']['parameters']
  ): EndpointRequest<IEndpoints['POST /education/users/{educationUser-id}/rubrics']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/users/{educationUser-id}/rubrics',
      paramDefs: {
        path: ['educationUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}`
   *
   * When set, the grading rubric attached to the assignment.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationRubric-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['body'],
    params?: IEndpoints['PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
      paramDefs: {
        path: ['educationUser-id', 'educationRubric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationUser-id', 'educationRubric-id'],
      },
      params,
    };
  },
};

export const schools = {
  /**
   * `GET /education/users/{educationUser-id}/schools`
   *
   * Schools to which the user belongs. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/schools']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/schools']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/schools',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id'],
      },
      params,
    };
  },
  /**
   * `GET /education/users/{educationUser-id}/schools/{educationSchool-id}`
   *
   * Schools to which the user belongs. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/schools/{educationSchool-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/schools/{educationSchool-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/schools/{educationSchool-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationSchool-id'],
      },
      params,
    };
  },
};

export const taughtClasses = {
  /**
   * `GET /education/users/{educationUser-id}/taughtClasses`
   *
   * Classes for which the user is a teacher.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/taughtClasses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/taughtClasses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/taughtClasses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id'],
      },
      params,
    };
  },
  /**
   * `GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}`
   *
   * Classes for which the user is a teacher.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/taughtClasses/{educationClass-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationClass-id'],
      },
      params,
    };
  },
};
