import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/tags': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id', 'teamworkTag-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'teamworkTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'teamworkTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/tags`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/tags',
    paramDefs: {
      path: ['user-id', 'team-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Users assigned to the tag.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id', 'teamworkTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
      paramDefs: {
        path: ['user-id', 'team-id', 'teamworkTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Users assigned to the tag.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
};
