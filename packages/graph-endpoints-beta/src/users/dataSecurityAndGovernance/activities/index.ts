import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/activities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/activities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/activities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities',
    'patch'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
    'get'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
    'post'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/activities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/activities`
 *
 * Container for activity logs (content processing and audit) related to this user. ContainsTarget: true.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/activities`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const contentActivities = {
  /**
   * `GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities`
   *
   * Collection of activity logs related to content processing.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['body'],
    params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
   *
   * Collection of activity logs related to content processing.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'contentActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
      paramDefs: {
        path: ['user-id', 'contentActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'contentActivity-id'],
      },
      params,
    };
  },
};
