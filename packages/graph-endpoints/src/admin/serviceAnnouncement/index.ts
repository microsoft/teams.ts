export * as healthOverviews from './healthOverviews';
export * as messages from './messages';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement': Operation<'/admin/serviceAnnouncement', 'delete'>;
  'GET /admin/serviceAnnouncement': Operation<'/admin/serviceAnnouncement', 'get'>;
  'PATCH /admin/serviceAnnouncement': Operation<'/admin/serviceAnnouncement', 'patch'>;
  'GET /admin/serviceAnnouncement/issues': Operation<'/admin/serviceAnnouncement/issues', 'get'>;
  'POST /admin/serviceAnnouncement/issues': Operation<'/admin/serviceAnnouncement/issues', 'post'>;
  'GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    'patch'
  >;
  'DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/serviceAnnouncement']['response']> {
  return {
    method: 'delete',
    path: '/admin/serviceAnnouncement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement`
 *
 * A container for service communications resources. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement']['response']> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement']['body']
): EndpointRequest<IEndpoints['PATCH /admin/serviceAnnouncement']['response']> {
  return {
    method: 'patch',
    path: '/admin/serviceAnnouncement',
    body,
  };
}

export const issues = {
  /**
   * `GET /admin/serviceAnnouncement/issues`
   *
   * Retrieve serviceHealthIssue resources from the issues navigation property. This operation retrieves information about all service health issues that exist for the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /admin/serviceAnnouncement/issues']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement/issues']['response']> {
    return {
      method: 'get',
      path: '/admin/serviceAnnouncement/issues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/serviceAnnouncement/issues`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/issues']['body']
  ): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/issues']['response']> {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/issues',
      body,
    };
  },
  /**
   * `GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}`
   *
   * Retrieve the properties and relationships of a serviceHealthIssue object. This operation retrieves a specified service health issue for tenant. The operation returns an error if the issue does not exist for the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['response']
  > {
    return {
      method: 'get',
      path: '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['serviceHealthIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['body'],
    params?: IEndpoints['PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
      paramDefs: {
        path: ['serviceHealthIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceHealthIssue-id'],
      },
      params,
    };
  },
};
