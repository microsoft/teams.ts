export * as assignments from './assignments';
export * as user from './user';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me': Operation<'/education/me', 'delete'>;
  'GET /education/me': Operation<'/education/me', 'get'>;
  'PATCH /education/me': Operation<'/education/me', 'patch'>;
  'GET /education/me/classes': Operation<'/education/me/classes', 'get'>;
  'GET /education/me/classes/{educationClass-id}': Operation<
    '/education/me/classes/{educationClass-id}',
    'get'
  >;
  'GET /education/me/rubrics': Operation<'/education/me/rubrics', 'get'>;
  'POST /education/me/rubrics': Operation<'/education/me/rubrics', 'post'>;
  'GET /education/me/rubrics/{educationRubric-id}': Operation<
    '/education/me/rubrics/{educationRubric-id}',
    'get'
  >;
  'PATCH /education/me/rubrics/{educationRubric-id}': Operation<
    '/education/me/rubrics/{educationRubric-id}',
    'patch'
  >;
  'DELETE /education/me/rubrics/{educationRubric-id}': Operation<
    '/education/me/rubrics/{educationRubric-id}',
    'delete'
  >;
  'GET /education/me/schools': Operation<'/education/me/schools', 'get'>;
  'GET /education/me/schools/{educationSchool-id}': Operation<
    '/education/me/schools/{educationSchool-id}',
    'get'
  >;
  'GET /education/me/taughtClasses': Operation<'/education/me/taughtClasses', 'get'>;
  'GET /education/me/taughtClasses/{educationClass-id}': Operation<
    '/education/me/taughtClasses/{educationClass-id}',
    'get'
  >;
}

/**
 * `DELETE /education/me`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/me']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /education/me`
 *
 */
export function get(
  params?: IEndpoints['GET /education/me']['parameters']
): EndpointRequest<IEndpoints['GET /education/me']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/me`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me']['body']
): EndpointRequest<IEndpoints['PATCH /education/me']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me',
    body,
  };
}

export const classes = {
  /**
   * `GET /education/me/classes`
   *
   * Get the educationClass resources an educationUser is a member of.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/classes']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/classes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/classes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /education/me/classes/{educationClass-id}`
   *
   * Classes to which the user belongs. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/classes/{educationClass-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/classes/{educationClass-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/classes/{educationClass-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};

export const rubrics = {
  /**
   * `GET /education/me/rubrics`
   *
   * Retrieve a list of educationRubric objects.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/rubrics']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/rubrics']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/rubrics',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /education/me/rubrics`
   *
   * Create a new educationRubric object.
   */
  create: function create(
    body: IEndpoints['POST /education/me/rubrics']['body']
  ): EndpointRequest<IEndpoints['POST /education/me/rubrics']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/rubrics',
      body,
    };
  },
  /**
   * `GET /education/me/rubrics/{educationRubric-id}`
   *
   * Retrieve the properties and relationships of an educationRubric object. Only teachers and students can perform this operation.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/rubrics/{educationRubric-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/rubrics/{educationRubric-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/rubrics/{educationRubric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationRubric-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/me/rubrics/{educationRubric-id}`
   *
   * Update the properties of an educationRubric object. Only teachers can perform this operation. Updating a rubric attached to an assignment (PATCH /education/classes/{id}/assignments/{id}/rubric) is only possible before the assignment is published, and what is updated is actually the original rubric that exists under /education/users/{id}/rubrics. After the assignment is published, an immutable copy of the rubric is made that is attached to that specific assignment. That rubric can be retrieved using GET /education/classes/{id}/assignments/{id}/rubric, but it can&#x27;t be updated.
   */
  update: function update(
    body: IEndpoints['PATCH /education/me/rubrics/{educationRubric-id}']['body'],
    params?: IEndpoints['PATCH /education/me/rubrics/{educationRubric-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /education/me/rubrics/{educationRubric-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/me/rubrics/{educationRubric-id}',
      paramDefs: {
        path: ['educationRubric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/me/rubrics/{educationRubric-id}`
   *
   * Delete an educationRubric object. Only teachers can perform this operation.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/me/rubrics/{educationRubric-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /education/me/rubrics/{educationRubric-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/me/rubrics/{educationRubric-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationRubric-id'],
      },
      params,
    };
  },
};

export const schools = {
  /**
   * `GET /education/me/schools`
   *
   * Retrieve a list of schools for a user.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/schools']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/schools']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/schools',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /education/me/schools/{educationSchool-id}`
   *
   * Schools to which the user belongs. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/schools/{educationSchool-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/schools/{educationSchool-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/schools/{educationSchool-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationSchool-id'],
      },
      params,
    };
  },
};

export const taughtClasses = {
  /**
   * `GET /education/me/taughtClasses`
   *
   * Classes for which the user is a teacher.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/taughtClasses']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/taughtClasses']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/taughtClasses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /education/me/taughtClasses/{educationClass-id}`
   *
   * Classes for which the user is a teacher.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/taughtClasses/{educationClass-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/taughtClasses/{educationClass-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/taughtClasses/{educationClass-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};
