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
  'GET /education/reports/readingCoachPassages': Operation<
    '/education/reports/readingCoachPassages',
    'get'
  >;
  'POST /education/reports/readingCoachPassages': Operation<
    '/education/reports/readingCoachPassages',
    'post'
  >;
  'GET /education/reports/readingCoachPassages/{readingCoachPassage-id}': Operation<
    '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    'get'
  >;
  'PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}': Operation<
    '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    'patch'
  >;
  'DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}': Operation<
    '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
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
  'GET /education/reports/speakerAssignmentSubmissions': Operation<
    '/education/reports/speakerAssignmentSubmissions',
    'get'
  >;
  'POST /education/reports/speakerAssignmentSubmissions': Operation<
    '/education/reports/speakerAssignmentSubmissions',
    'post'
  >;
  'GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}': Operation<
    '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    'get'
  >;
  'PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}': Operation<
    '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    'patch'
  >;
  'DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}': Operation<
    '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
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
   * Details of submitted reading assignments.
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

export const readingCoachPassages = {
  /**
   * `GET /education/reports/readingCoachPassages`
   *
   * Get a list of Reading Coach passages that were practiced by a student.
   */
  list: function list(
    params?: IEndpoints['GET /education/reports/readingCoachPassages']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/reports/readingCoachPassages']['response']> {
    return {
      method: 'get',
      path: '/education/reports/readingCoachPassages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /education/reports/readingCoachPassages`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/reports/readingCoachPassages']['body']
  ): EndpointRequest<IEndpoints['POST /education/reports/readingCoachPassages']['response']> {
    return {
      method: 'post',
      path: '/education/reports/readingCoachPassages',
      body,
    };
  },
  /**
   * `GET /education/reports/readingCoachPassages/{readingCoachPassage-id}`
   *
   * Details of practiced Reading Coach passages.
   */
  get: function get(
    params?: IEndpoints['GET /education/reports/readingCoachPassages/{readingCoachPassage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/reports/readingCoachPassages/{readingCoachPassage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['readingCoachPassage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}']['body'],
    params?: IEndpoints['PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
      paramDefs: {
        path: ['readingCoachPassage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['readingCoachPassage-id'],
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
   * Details of check-in responses.
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

export const speakerAssignmentSubmissions = {
  /**
   * `GET /education/reports/speakerAssignmentSubmissions`
   *
   * Get a list of speaker assignments that were submitted by a student.
   */
  list: function list(
    params?: IEndpoints['GET /education/reports/speakerAssignmentSubmissions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/reports/speakerAssignmentSubmissions']['response']
  > {
    return {
      method: 'get',
      path: '/education/reports/speakerAssignmentSubmissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /education/reports/speakerAssignmentSubmissions`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/reports/speakerAssignmentSubmissions']['body']
  ): EndpointRequest<
    IEndpoints['POST /education/reports/speakerAssignmentSubmissions']['response']
  > {
    return {
      method: 'post',
      path: '/education/reports/speakerAssignmentSubmissions',
      body,
    };
  },
  /**
   * `GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}`
   *
   * Details of submitted speaker assignments.
   */
  get: function get(
    params?: IEndpoints['GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['response']
  > {
    return {
      method: 'get',
      path: '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['speakerAssignmentSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['body'],
    params?: IEndpoints['PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
      paramDefs: {
        path: ['speakerAssignmentSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['speakerAssignmentSubmission-id'],
      },
      params,
    };
  },
};
