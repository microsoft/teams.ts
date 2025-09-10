import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams',
    'post'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedTeam-id', 'channel-id', 'sharedWithChannelTeamInfo-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams`
 *
 * A collection of teams with which a channel is shared.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * A collection of teams with which a channel is shared.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'sharedWithChannelTeamInfo-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'sharedWithChannelTeamInfo-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const allowedMembers = {
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers`
   *
   * A collection of team members who have access to the shared channel.
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deletedTeam-id', 'channel-id', 'sharedWithChannelTeamInfo-id'],
      },
      params,
    };
  },
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}`
   *
   * A collection of team members who have access to the shared channel.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deletedTeam-id',
          'channel-id',
          'sharedWithChannelTeamInfo-id',
          'conversationMember-id',
        ],
      },
      params,
    };
  },
};

export const team = {
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
   *
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deletedTeam-id', 'channel-id', 'sharedWithChannelTeamInfo-id'],
      },
      params,
    };
  },
};
