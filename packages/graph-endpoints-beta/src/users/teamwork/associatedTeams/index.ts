import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'delete'
  >;
  'GET /users/{user-id}/teamwork/associatedTeams': Operation<
    '/users/{user-id}/teamwork/associatedTeams',
    'get'
  >;
  'GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'get'
  >;
  'PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'patch'
  >;
  'POST /users/{user-id}/teamwork/associatedTeams': Operation<
    '/users/{user-id}/teamwork/associatedTeams',
    'post'
  >;
  'GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team': Operation<
    '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'associatedTeamInfo-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/associatedTeams`
 *
 * The list of associatedTeamInfo objects that a user is associated with.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/teamwork/associatedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/teamwork/associatedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/teamwork/associatedTeams',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 * The list of associatedTeamInfo objects that a user is associated with.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: {
      path: ['user-id', 'associatedTeamInfo-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: {
      path: ['user-id', 'associatedTeamInfo-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/teamwork/associatedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/teamwork/associatedTeams']['body'],
  params?: IEndpoints['POST /users/{user-id}/teamwork/associatedTeams']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/teamwork/associatedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/teamwork/associatedTeams',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const team = {
  /**
   * `GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'associatedTeamInfo-id'],
      },
      params,
    };
  },
};
