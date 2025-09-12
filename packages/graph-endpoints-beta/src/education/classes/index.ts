export * as assignmentSettings from './assignmentSettings';
export * as assignments from './assignments';
export * as group from './group';
export * as modules from './modules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}': Operation<
    '/education/classes/{educationClass-id}',
    'delete'
  >;
  'GET /education/classes': Operation<'/education/classes', 'get'>;
  'GET /education/classes/{educationClass-id}': Operation<
    '/education/classes/{educationClass-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}': Operation<
    '/education/classes/{educationClass-id}',
    'patch'
  >;
  'POST /education/classes': Operation<'/education/classes', 'post'>;
  'GET /education/classes/{educationClass-id}/assignmentCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignmentCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentDefaults': Operation<
    '/education/classes/{educationClass-id}/assignmentDefaults',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentDefaults': Operation<
    '/education/classes/{educationClass-id}/assignmentDefaults',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignmentDefaults': Operation<
    '/education/classes/{educationClass-id}/assignmentDefaults',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/members': Operation<
    '/education/classes/{educationClass-id}/members',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/schools': Operation<
    '/education/classes/{educationClass-id}/schools',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/schools/{educationSchool-id}': Operation<
    '/education/classes/{educationClass-id}/schools/{educationSchool-id}',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/teachers': Operation<
    '/education/classes/{educationClass-id}/teachers',
    'get'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}`
 *
 * Delete an educationClass. Because a class is also a universal group, deleting a class deletes the group.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/classes/{educationClass-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationClass-id'],
    },
    params,
  };
}

/**
 * `GET /education/classes`
 *
 * Retrieve a list of all class objects.
 */
export function list(
  params?: IEndpoints['GET /education/classes']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}`
 *
 * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you&#x27;re using the delegated token, the user will only see classes in which they are members.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}',
    paramDefs: {
      path: ['educationClass-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}`
 *
 * Update the properties of a class.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/classes/{educationClass-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}',
    paramDefs: {
      path: ['educationClass-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /education/classes`
  *
  * Create a new class. This will also create a universal group. When you use this API to create a class, it will add special properties to the group, which will
add features such as assignments and special handling within Microsoft Teams when teams are created using the group. Please note that this API only creates the universal group and does not create a team. Microsoft Teams provides a user interface for teachers to create teams for their own classes using the groups created by this API.
  */
export function create(
  body: IEndpoints['POST /education/classes']['body']
): EndpointRequest<IEndpoints['POST /education/classes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes',
    body,
  };
}

export const assignmentCategories = {
  /**
   * `GET /education/classes/{educationClass-id}/assignmentCategories`
   *
   * Retrieve a list of educationCategory objects. Only teachers can perform this operation.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignmentCategories`
   *
   * Create a new educationCategory on an educationClass. Only teachers can perform this operation.
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignmentCategories']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignmentCategories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignmentCategories']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignmentCategories',
      paramDefs: {
        path: ['educationClass-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}`
   *
   * Retrieve an educationCategory object. Only teachers, students, and applications with application permissions can perform this operation.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
      paramDefs: {
        path: ['educationClass-id', 'educationCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}`
   *
   * Delete an existing category. Only teachers can perform this operation.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationClass-id', 'educationCategory-id'],
      },
      params,
    };
  },
};

export const assignmentDefaults = {
  /**
   * `GET /education/classes/{educationClass-id}/assignmentDefaults`
   *
   * Read the properties and relationships of an educationAssignmentDefaults object.  These are the class-level assignment defaults respected by new assignments created in the class. Callers can continue to specify custom values on each assignment creation if they don&#x27;t want the default behaviors. Only teachers can perform this operation.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentDefaults']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignmentDefaults']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignmentDefaults',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignmentDefaults`
   *
   * Update the properties of an educationAssignmentDefaults object. Only teachers can update these settings.
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentDefaults']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentDefaults']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentDefaults']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignmentDefaults',
      paramDefs: {
        path: ['educationClass-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignmentDefaults`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentDefaults']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentDefaults']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignmentDefaults',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};

export const members = {
  /**
   * `GET /education/classes/{educationClass-id}/members`
   *
   * Retrieve the teachers and students for a class. Note that if the delegated token is used, members can only be seen by other members of the class.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/members']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/members']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};

export const schools = {
  /**
   * `GET /education/classes/{educationClass-id}/schools`
   *
   * Retrieve a list of schools in which the class is taught.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/schools']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/schools']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/schools',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/schools/{educationSchool-id}`
   *
   * All schools that this class is associated with. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/schools/{educationSchool-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/schools/{educationSchool-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/schools/{educationSchool-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationSchool-id'],
      },
      params,
    };
  },
};

export const teachers = {
  /**
   * `GET /education/classes/{educationClass-id}/teachers`
   *
   * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/teachers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/teachers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/teachers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id'],
      },
      params,
    };
  },
};
