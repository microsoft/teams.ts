import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources',
    'post'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'get'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'post'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'patch'
  >;
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'delete'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationUser-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
    },
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources`
 *
 * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources',
    paramDefs: {
      path: ['educationUser-id', 'educationAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      path: ['educationUser-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      path: ['educationUser-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources']['response']
> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources',
    paramDefs: {
      path: ['educationUser-id', 'educationAssignment-id'],
    },
    params,
    body,
  };
}

export const dependentResources = {
  /**
   * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
   *
   * A collection of assignment resources that depend on the parent educationAssignmentResource.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
  > {
    return {
      method: 'get',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['body'],
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id', 'educationAssignmentResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   * A collection of assignment resources that depend on the parent educationAssignmentResource.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationUser-id',
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['body'],
    params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        path: [
          'educationUser-id',
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
   * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationUser-id',
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
    };
  },
};
