import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews': Operation<
    '/admin/serviceAnnouncement/healthOverviews',
    'get'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/healthOverviews': Operation<
    '/admin/serviceAnnouncement/healthOverviews',
    'post'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
    'get'
  >;
  'POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
    'post'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    'patch'
  >;
  'DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['serviceHealth-id'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/healthOverviews`
 *
 * Retrieve the serviceHealth resources from the healthOverviews navigation property. This operation provides the health report of all subscribed services for a tenant.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement/healthOverviews']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/healthOverviews',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}`
 *
 * Retrieve the properties and relationships of a serviceHealth object. This operation provides the health information of a specified service for a tenant.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    paramDefs: {
      path: ['serviceHealth-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    paramDefs: {
      path: ['serviceHealth-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/healthOverviews`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews']['body']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/healthOverviews']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/healthOverviews',
    body,
  };
}

export const issues = {
  /**
   * `GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues`
   *
   * A collection of issues that happened on the service, with detailed information for each issue.
   */
  list: function list(
    params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['serviceHealth-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['body'],
    params?: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
      paramDefs: {
        path: ['serviceHealth-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}`
   *
   * A collection of issues that happened on the service, with detailed information for each issue.
   */
  get: function get(
    params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['serviceHealth-id', 'serviceHealthIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['body'],
    params?: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
      paramDefs: {
        path: ['serviceHealth-id', 'serviceHealthIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceHealth-id', 'serviceHealthIssue-id'],
      },
      params,
    };
  },
};
