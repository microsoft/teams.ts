import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'delete'
  >;
  'GET /me/teamwork/associatedTeams': Operation<'/me/teamwork/associatedTeams', 'get'>;
  'GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'get'
  >;
  'PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}': Operation<
    '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    'patch'
  >;
  'POST /me/teamwork/associatedTeams': Operation<'/me/teamwork/associatedTeams', 'post'>;
  'GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team': Operation<
    '/me/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `DELETE /me/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['associatedTeamInfo-id'],
    },
    params,
  };
}

/**
  * `GET /me/teamwork/associatedTeams`
  *
  * Get the list of teams in Microsoft Teams that a user is associated with.
Currently, a user can be associated with a team in two different ways:
* A user can be a direct member of a team.
* A user can be a member of a shared channel that is hosted inside a team.
  */
export function list(
  params?: IEndpoints['GET /me/teamwork/associatedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /me/teamwork/associatedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/teamwork/associatedTeams',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 * The list of associatedTeamInfo objects that a user is associated with.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: {
      path: ['associatedTeamInfo-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: {
      path: ['associatedTeamInfo-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/teamwork/associatedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /me/teamwork/associatedTeams']['body']
): EndpointRequest<IEndpoints['POST /me/teamwork/associatedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/teamwork/associatedTeams',
    body,
  };
}

export const team = {
  /**
   * `GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['associatedTeamInfo-id'],
      },
      params,
    };
  },
};
