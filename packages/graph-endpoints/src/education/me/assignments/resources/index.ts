import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/resources': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    'patch'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/resources': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'get'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'patch'
  >;
  'DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'delete'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationAssignment-id', 'educationAssignmentResource-id'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/resources`
 *
 * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/resources',
    paramDefs: {
      path: ['educationAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      path: ['educationAssignment-id', 'educationAssignmentResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}',
    paramDefs: {
      path: ['educationAssignment-id', 'educationAssignmentResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/resources`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/resources']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/resources']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/resources',
    paramDefs: {
      path: ['educationAssignment-id'],
    },
    params,
    body,
  };
}

export const dependentResources = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
   *
   * A collection of assignment resources that depend on the parent educationAssignmentResource.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
  > {
    return {
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationAssignment-id', 'educationAssignmentResource-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['body'],
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
      paramDefs: {
        path: ['educationAssignment-id', 'educationAssignmentResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   * A collection of assignment resources that depend on the parent educationAssignmentResource.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['body'],
    params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        path: [
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
   * `DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/me/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationAssignment-id',
          'educationAssignmentResource-id',
          'educationAssignmentResource-id1',
        ],
      },
      params,
    };
  },
};
