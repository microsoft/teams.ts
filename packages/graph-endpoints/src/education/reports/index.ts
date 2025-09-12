import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/reports': Operation<'/education/reports', 'delete'>;
  'GET /education/reports': Operation<'/education/reports', 'get'>;
  'PATCH /education/reports': Operation<'/education/reports', 'patch'>;
  'GET /education/reports/readingAssignmentSubmissions': Operation<
    '/education/reports/readingAssignmentSubmissions',
    'get'
  >;
  'POST /education/reports/readingAssignmentSubmissions': Operation<
    '/education/reports/readingAssignmentSubmissions',
    'post'
  >;
  'GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}': Operation<
    '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    'get'
  >;
  'PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}': Operation<
    '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    'patch'
  >;
  'DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}': Operation<
    '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    'delete'
  >;
  'GET /education/reports/reflectCheckInResponses': Operation<
    '/education/reports/reflectCheckInResponses',
    'get'
  >;
  'POST /education/reports/reflectCheckInResponses': Operation<
    '/education/reports/reflectCheckInResponses',
    'post'
  >;
  'GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}': Operation<
    '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    'get'
  >;
  'PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}': Operation<
    '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    'patch'
  >;
  'DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}': Operation<
    '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    'delete'
  >;
}

/**
 * `DELETE /education/reports`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/reports']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/reports']['response']> {
  return {
    method: 'delete',
    path: '/education/reports',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /education/reports`
 *
 */
export function list(
  params?: IEndpoints['GET /education/reports']['parameters']
): EndpointRequest<IEndpoints['GET /education/reports']['response']> {
  return {
    method: 'get',
    path: '/education/reports',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/reports']['body']
): EndpointRequest<IEndpoints['PATCH /education/reports']['response']> {
  return {
    method: 'patch',
    path: '/education/reports',
    body,
  };
}

export const readingAssignmentSubmissions = {
  /**
   * `GET /education/reports/readingAssignmentSubmissions`
   *
   * Get a list of reading assignments that were submitted by a student.
   */
  list: function list(
    params?: IEndpoints['GET /education/reports/readingAssignmentSubmissions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/reports/readingAssignmentSubmissions']['response']
  > {
    return {
      method: 'get',
      path: '/education/reports/readingAssignmentSubmissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /education/reports/readingAssignmentSubmissions`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/reports/readingAssignmentSubmissions']['body']
  ): EndpointRequest<
    IEndpoints['POST /education/reports/readingAssignmentSubmissions']['response']
  > {
    return {
      method: 'post',
      path: '/education/reports/readingAssignmentSubmissions',
      body,
    };
  },
  /**
   * `GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['readingAssignmentSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['body'],
    params?: IEndpoints['PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
      paramDefs: {
        path: ['readingAssignmentSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['readingAssignmentSubmission-id'],
      },
      params,
    };
  },
};

export const reflectCheckInResponses = {
  /**
   * `GET /education/reports/reflectCheckInResponses`
   *
   * Get a list of Reflect check-ins that were submitted by a student.
   */
  list: function list(
    params?: IEndpoints['GET /education/reports/reflectCheckInResponses']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/reports/reflectCheckInResponses']['response']> {
    return {
      method: 'get',
      path: '/education/reports/reflectCheckInResponses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /education/reports/reflectCheckInResponses`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/reports/reflectCheckInResponses']['body']
  ): EndpointRequest<IEndpoints['POST /education/reports/reflectCheckInResponses']['response']> {
    return {
      method: 'post',
      path: '/education/reports/reflectCheckInResponses',
      body,
    };
  },
  /**
   * `GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['reflectCheckInResponse-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['body'],
    params?: IEndpoints['PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
      paramDefs: {
        path: ['reflectCheckInResponse-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['reflectCheckInResponse-id'],
      },
      params,
    };
  },
};
