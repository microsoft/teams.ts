import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'patch'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
    'get'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    'patch'
  >;
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    'delete'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationAssignment-id', 'educationSubmission-id', 'educationSubmissionResource-id'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources`
 *
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    paramDefs: {
      path: ['educationAssignment-id', 'educationSubmission-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    paramDefs: {
      path: ['educationAssignment-id', 'educationSubmission-id', 'educationSubmissionResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    paramDefs: {
      path: ['educationAssignment-id', 'educationSubmission-id', 'educationSubmissionResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    paramDefs: {
      path: ['educationAssignment-id', 'educationSubmission-id'],
    },
    params,
    body,
  };
}

export const dependentResources = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources`
   *
   * A collection of submission resources that depend on the parent educationSubmissionResource.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['response']
  > {
    return {
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
    };
  },
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['body'],
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['response']
  > {
    return {
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
      paramDefs: {
        path: [
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}`
   *
   * A collection of submission resources that depend on the parent educationSubmissionResource.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
          'educationSubmissionResource-id1',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['body'],
    params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
      paramDefs: {
        path: [
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
          'educationSubmissionResource-id1',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'educationAssignment-id',
          'educationSubmission-id',
          'educationSubmissionResource-id',
          'educationSubmissionResource-id1',
        ],
      },
      params,
    };
  },
};
