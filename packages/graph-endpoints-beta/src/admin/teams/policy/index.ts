import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams/policy': Operation<'/admin/teams/policy', 'delete'>;
  'GET /admin/teams/policy': Operation<'/admin/teams/policy', 'get'>;
  'PATCH /admin/teams/policy': Operation<'/admin/teams/policy', 'patch'>;
  'GET /admin/teams/policy/userAssignments': Operation<
    '/admin/teams/policy/userAssignments',
    'get'
  >;
  'POST /admin/teams/policy/userAssignments': Operation<
    '/admin/teams/policy/userAssignments',
    'post'
  >;
  'GET /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}': Operation<
    '/admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}',
    'get'
  >;
  'PATCH /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}': Operation<
    '/admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}',
    'patch'
  >;
  'DELETE /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}': Operation<
    '/admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/teams/policy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams/policy']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/teams/policy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams/policy',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/teams/policy`
 *
 * Represents a navigation property to the Teams policy assignment object.
 */
export function get(
  params?: IEndpoints['GET /admin/teams/policy']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/policy',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/teams/policy`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams/policy']['body']
): EndpointRequest<IEndpoints['PATCH /admin/teams/policy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams/policy',
    body,
  };
}

export const userAssignments = {
  /**
   * `GET /admin/teams/policy/userAssignments`
   *
   * Navigation property to the collection of user policy assignments.
   */
  list: function list(
    params?: IEndpoints['GET /admin/teams/policy/userAssignments']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/teams/policy/userAssignments']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/policy/userAssignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/teams/policy/userAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/teams/policy/userAssignments']['body']
  ): EndpointRequest<IEndpoints['POST /admin/teams/policy/userAssignments']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/teams/policy/userAssignments',
      body,
    };
  },
  /**
   * `GET /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}`
   *
   * Navigation property to the collection of user policy assignments.
   */
  get: function get(
    params?: IEndpoints['GET /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamsPolicyUserAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['body'],
    params?: IEndpoints['PATCH /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}',
      paramDefs: {
        path: ['teamsPolicyUserAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/teams/policy/userAssignments/{teamsPolicyUserAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamsPolicyUserAssignment-id'],
      },
      params,
    };
  },
};
