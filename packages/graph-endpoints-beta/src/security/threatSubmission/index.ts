import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatSubmission': Operation<'/security/threatSubmission', 'delete'>;
  'GET /security/threatSubmission': Operation<'/security/threatSubmission', 'get'>;
  'PATCH /security/threatSubmission': Operation<'/security/threatSubmission', 'patch'>;
  'GET /security/threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies',
    'get'
  >;
  'POST /security/threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies',
    'post'
  >;
  'GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'patch'
  >;
  'DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'delete'
  >;
  'GET /security/threatSubmission/emailThreats': Operation<
    '/security/threatSubmission/emailThreats',
    'get'
  >;
  'POST /security/threatSubmission/emailThreats': Operation<
    '/security/threatSubmission/emailThreats',
    'post'
  >;
  'GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'patch'
  >;
  'DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'delete'
  >;
  'GET /security/threatSubmission/fileThreats': Operation<
    '/security/threatSubmission/fileThreats',
    'get'
  >;
  'POST /security/threatSubmission/fileThreats': Operation<
    '/security/threatSubmission/fileThreats',
    'post'
  >;
  'GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'patch'
  >;
  'DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'delete'
  >;
  'GET /security/threatSubmission/urlThreats': Operation<
    '/security/threatSubmission/urlThreats',
    'get'
  >;
  'POST /security/threatSubmission/urlThreats': Operation<
    '/security/threatSubmission/urlThreats',
    'post'
  >;
  'GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'patch'
  >;
  'DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/threatSubmission`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatSubmission']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatSubmission',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/threatSubmission`
 *
 * A threat submission sent to Microsoft; for example, a suspicious email threat, URL threat, or file threat.
 */
export function get(
  params?: IEndpoints['GET /security/threatSubmission']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatSubmission`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatSubmission']['body']
): EndpointRequest<IEndpoints['PATCH /security/threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatSubmission',
    body,
  };
}

export const emailThreatSubmissionPolicies = {
  /**
   * `GET /security/threatSubmission/emailThreatSubmissionPolicies`
   *
   * Get a list of the emailThreatSubmissionPolicy objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/emailThreatSubmissionPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/threatSubmission/emailThreatSubmissionPolicies`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/threatSubmission/emailThreatSubmissionPolicies']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/threatSubmission/emailThreatSubmissionPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/threatSubmission/emailThreatSubmissionPolicies',
      body,
    };
  },
  /**
   * `GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
   *
   * Read the properties and relationships of an emailThreatSubmissionPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['emailThreatSubmissionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['body'],
    params?: IEndpoints['PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
      paramDefs: {
        path: ['emailThreatSubmissionPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
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
   * `GET /security/threatSubmission/emailThreats`
   *
   * Get a list of the emailThreatSubmission objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatSubmission/emailThreats']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/threatSubmission/emailThreats']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/emailThreats',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/threatSubmission/emailThreats`
   *
   * Create a new emailThreatSubmission object.
   */
  create: function create(
    body: IEndpoints['POST /security/threatSubmission/emailThreats']['body']
  ): EndpointRequest<IEndpoints['POST /security/threatSubmission/emailThreats']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/threatSubmission/emailThreats',
      body,
    };
  },
  /**
   * `GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}`
   *
   * Read the properties and relationships of an emailThreatSubmission object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['emailThreatSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['body'],
    params?: IEndpoints['PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
      paramDefs: {
        path: ['emailThreatSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
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
   * `GET /security/threatSubmission/fileThreats`
   *
   * Get a list of the fileThreatSubmission objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatSubmission/fileThreats']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/threatSubmission/fileThreats']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/fileThreats',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/threatSubmission/fileThreats`
   *
   * Create a new fileThreatSubmission object.
   */
  create: function create(
    body: IEndpoints['POST /security/threatSubmission/fileThreats']['body']
  ): EndpointRequest<IEndpoints['POST /security/threatSubmission/fileThreats']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/threatSubmission/fileThreats',
      body,
    };
  },
  /**
   * `GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}`
   *
   * Read the properties and relationships of a fileThreatSubmission object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileThreatSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['body'],
    params?: IEndpoints['PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
      paramDefs: {
        path: ['fileThreatSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
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
   * `GET /security/threatSubmission/urlThreats`
   *
   * Get a list of the urlThreatSubmission objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatSubmission/urlThreats']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/threatSubmission/urlThreats']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/urlThreats',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/threatSubmission/urlThreats`
   *
   * Create a new urlThreatSubmission object.
   */
  create: function create(
    body: IEndpoints['POST /security/threatSubmission/urlThreats']['body']
  ): EndpointRequest<IEndpoints['POST /security/threatSubmission/urlThreats']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/threatSubmission/urlThreats',
      body,
    };
  },
  /**
   * `GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}`
   *
   * Read the properties and relationships of an urlThreatSubmission object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['urlThreatSubmission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['body'],
    params?: IEndpoints['PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
      paramDefs: {
        path: ['urlThreatSubmission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['urlThreatSubmission-id'],
      },
      params,
    };
  },
};
