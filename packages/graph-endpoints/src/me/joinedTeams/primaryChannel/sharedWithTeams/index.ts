import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'sharedWithChannelTeamInfo-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams`
 *
 * A collection of teams with which a channel is shared.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * A collection of teams with which a channel is shared.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      path: ['team-id', 'sharedWithChannelTeamInfo-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      path: ['team-id', 'sharedWithChannelTeamInfo-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const allowedMembers = {
  /**
   * `GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers`
   *
   * A collection of team members who have access to the shared channel.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'sharedWithChannelTeamInfo-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}`
   *
   * A collection of team members who have access to the shared channel.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'sharedWithChannelTeamInfo-id', 'conversationMember-id'],
      },
      params,
    };
  },
};

export const team = {
  /**
   * `GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'sharedWithChannelTeamInfo-id'],
      },
      params,
    };
  },
};
