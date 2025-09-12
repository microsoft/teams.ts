import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/tags': Operation<'/me/joinedTeams/{team-id}/tags', 'get'>;
  'GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/tags': Operation<'/me/joinedTeams/{team-id}/tags', 'post'>;
  'GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'teamworkTag-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/tags']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/tags',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['team-id', 'teamworkTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['team-id', 'teamworkTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/tags`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/tags']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/tags']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/tags',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Users assigned to the tag.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'teamworkTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members',
      paramDefs: {
        path: ['team-id', 'teamworkTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Users assigned to the tag.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        path: ['team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
};
