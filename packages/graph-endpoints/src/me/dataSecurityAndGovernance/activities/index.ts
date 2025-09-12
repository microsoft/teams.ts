import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/activities': Operation<
    '/me/dataSecurityAndGovernance/activities',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/activities': Operation<
    '/me/dataSecurityAndGovernance/activities',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/activities': Operation<
    '/me/dataSecurityAndGovernance/activities',
    'patch'
  >;
  'GET /me/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities',
    'get'
  >;
  'POST /me/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities',
    'post'
  >;
  'GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'patch'
  >;
  'DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/activities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/dataSecurityAndGovernance/activities']['response']> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/activities',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/activities`
 *
 * Container for activity logs (content processing and audit) related to this user. ContainsTarget: true.
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance/activities']['response']> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/activities',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/activities`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities']['body']
): EndpointRequest<IEndpoints['PATCH /me/dataSecurityAndGovernance/activities']['response']> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/activities',
    body,
  };
}

export const contentActivities = {
  /**
   * `GET /me/dataSecurityAndGovernance/activities/contentActivities`
   *
   * Collection of activity logs related to content processing.
   */
  list: function list(
    params?: IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities']['response']
  > {
    return {
      method: 'get',
      path: '/me/dataSecurityAndGovernance/activities/contentActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/dataSecurityAndGovernance/activities/contentActivities`
   *
   * Create a content activity for the signed-in user.
   */
  create: function create(
    body: IEndpoints['POST /me/dataSecurityAndGovernance/activities/contentActivities']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/dataSecurityAndGovernance/activities/contentActivities']['response']
  > {
    return {
      method: 'post',
      path: '/me/dataSecurityAndGovernance/activities/contentActivities',
      body,
    };
  },
  /**
   * `GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
   *
   * Collection of activity logs related to content processing.
   */
  get: function get(
    params?: IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['contentActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['body'],
    params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
      paramDefs: {
        path: ['contentActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['contentActivity-id'],
      },
      params,
    };
  },
};
