import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /threatSubmission': Operation<'/threatSubmission', 'get'>;
  'PATCH /threatSubmission': Operation<'/threatSubmission', 'patch'>;
  'GET /threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies',
    'get'
  >;
  'POST /threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies',
    'post'
  >;
  'GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'get'
  >;
  'PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'patch'
  >;
  'DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'delete'
  >;
  'GET /threatSubmission/emailThreats': Operation<'/threatSubmission/emailThreats', 'get'>;
  'POST /threatSubmission/emailThreats': Operation<'/threatSubmission/emailThreats', 'post'>;
  'GET /threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'get'
  >;
  'PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'patch'
  >;
  'DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'delete'
  >;
  'GET /threatSubmission/fileThreats': Operation<'/threatSubmission/fileThreats', 'get'>;
  'POST /threatSubmission/fileThreats': Operation<'/threatSubmission/fileThreats', 'post'>;
  'GET /threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'get'
  >;
  'PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'patch'
  >;
  'DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'delete'
  >;
  'GET /threatSubmission/urlThreats': Operation<'/threatSubmission/urlThreats', 'get'>;
  'POST /threatSubmission/urlThreats': Operation<'/threatSubmission/urlThreats', 'post'>;
  'GET /threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'get'
  >;
  'PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'patch'
  >;
  'DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'delete'
  >;
}

/**
 * `GET /threatSubmission`
 *
 */
export function get(
  params?: IEndpoints['GET /threatSubmission']['parameters']
): EndpointRequest<IEndpoints['GET /threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /threatSubmission`
 *
 */
export function update(
  body: IEndpoints['PATCH /threatSubmission']['body']
): EndpointRequest<IEndpoints['PATCH /threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/threatSubmission',
    body,
  };
}

export const emailThreatSubmissionPolicies = {
  /**
   * `GET /threatSubmission/emailThreatSubmissionPolicies`
   *
   */
  list: function list(
    params?: IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/emailThreatSubmissionPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /threatSubmission/emailThreatSubmissionPolicies`
   *
   */
  create: function create(
    body: IEndpoints['POST /threatSubmission/emailThreatSubmissionPolicies']['body']
  ): EndpointRequest<
    IEndpoints['POST /threatSubmission/emailThreatSubmissionPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/threatSubmission/emailThreatSubmissionPolicies',
      body,
    };
  },
  /**
   * `GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['emailThreatSubmissionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['body'],
    params?: IEndpoints['PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
      paramDefs: {
        path: ['emailThreatSubmissionPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['emailThreatSubmissionPolicy-id'],
      },
      params,
    };
  },
};

export const emailThreats = {
  /**
   * `GET /threatSubmission/emailThreats`
   *
   */
  list: function list(
    params?: IEndpoints['GET /threatSubmission/emailThreats']['parameters']
  ): EndpointRequest<IEndpoints['GET /threatSubmission/emailThreats']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/emailThreats',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /threatSubmission/emailThreats`
   *
   */
  create: function create(
    body: IEndpoints['POST /threatSubmission/emailThreats']['body']
  ): EndpointRequest<IEndpoints['POST /threatSubmission/emailThreats']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/threatSubmission/emailThreats',
      body,
    };
  },
  /**
   * `GET /threatSubmission/emailThreats/{emailThreatSubmission-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['emailThreatSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}']['body'],
    params?: IEndpoints['PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
      paramDefs: {
        path: ['emailThreatSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['emailThreatSubmission-id'],
      },
      params,
    };
  },
};

export const fileThreats = {
  /**
   * `GET /threatSubmission/fileThreats`
   *
   */
  list: function list(
    params?: IEndpoints['GET /threatSubmission/fileThreats']['parameters']
  ): EndpointRequest<IEndpoints['GET /threatSubmission/fileThreats']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/fileThreats',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /threatSubmission/fileThreats`
   *
   */
  create: function create(
    body: IEndpoints['POST /threatSubmission/fileThreats']['body']
  ): EndpointRequest<IEndpoints['POST /threatSubmission/fileThreats']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/threatSubmission/fileThreats',
      body,
    };
  },
  /**
   * `GET /threatSubmission/fileThreats/{fileThreatSubmission-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileThreatSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}']['body'],
    params?: IEndpoints['PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
      paramDefs: {
        path: ['fileThreatSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['fileThreatSubmission-id'],
      },
      params,
    };
  },
};

export const urlThreats = {
  /**
   * `GET /threatSubmission/urlThreats`
   *
   */
  list: function list(
    params?: IEndpoints['GET /threatSubmission/urlThreats']['parameters']
  ): EndpointRequest<IEndpoints['GET /threatSubmission/urlThreats']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/urlThreats',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /threatSubmission/urlThreats`
   *
   */
  create: function create(
    body: IEndpoints['POST /threatSubmission/urlThreats']['body']
  ): EndpointRequest<IEndpoints['POST /threatSubmission/urlThreats']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/threatSubmission/urlThreats',
      body,
    };
  },
  /**
   * `GET /threatSubmission/urlThreats/{urlThreatSubmission-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['urlThreatSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}']['body'],
    params?: IEndpoints['PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
      paramDefs: {
        path: ['urlThreatSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['urlThreatSubmission-id'],
      },
      params,
    };
  },
};
