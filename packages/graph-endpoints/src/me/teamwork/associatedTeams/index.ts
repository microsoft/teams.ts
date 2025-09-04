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
    method: 'delete',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /me/teamwork/associatedTeams`
  *
  * Get the list of teams in Microsoft Teams that a user is associated with.
Currently, a user can be associated with a team in two different ways:
  */
export function list(
  params?: IEndpoints['GET /me/teamwork/associatedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /me/teamwork/associatedTeams']['response']> {
  return {
    method: 'get',
    path: '/me/teamwork/associatedTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    method: 'get',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'associatedTeamInfo-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}',
    paramDefs: [{ name: 'associatedTeamInfo-id', in: 'path' }],
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
      method: 'get',
      path: '/me/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
      paramDefs: [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'associatedTeamInfo-id', in: 'path' },
      ],
      params,
    };
  },
};
