import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'delete'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 * Delete a specific educationAssignmentResource attached to an assignment. Only teachers in the class can remove a resource. After an assignment has been published to students, teachers can&#x27;t remove resources that are marked as &#x27;distributeToStudents&#x27;.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationClass-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources`
 *
 * Get all the educationAssignmentResource objects for an assignment. Only teachers, students, and applications with application permissions can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 * Get the properties of an education assignment resource associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources`
 *
 * Create an assignment resource. Only teachers can perform this operation. You can create the following types of assignment resources: Every resource has an @odata.type property to indicate which type of resource is being created.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id'],
    },
    params,
    body,
  };
}

export const dependentResources = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
   *
   * List the dependent education assignment resources for a given education assignment resource.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   * A collection of assignment resources that depend on the parent educationAssignmentResource.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationClass-id',
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
    };
  },
};
