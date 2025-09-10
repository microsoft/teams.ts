import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/primaryChannel/sharedWithTeams': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    'post'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team': Operation<
    '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'sharedWithChannelTeamInfo-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams`
 *
 * A collection of teams with which a channel is shared.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 * A collection of teams with which a channel is shared.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      path: ['group-id', 'sharedWithChannelTeamInfo-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
    paramDefs: {
      path: ['group-id', 'sharedWithChannelTeamInfo-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/sharedWithTeams`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/sharedWithTeams']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/sharedWithTeams']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/sharedWithTeams']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const allowedMembers = {
  /**
   * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers`
   *
   * A collection of team members who have access to the shared channel.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'sharedWithChannelTeamInfo-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}`
   *
   * A collection of team members who have access to the shared channel.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'sharedWithChannelTeamInfo-id', 'conversationMember-id'],
      },
      params,
    };
  },
};

export const team = {
  /**
   * `GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'sharedWithChannelTeamInfo-id'],
      },
      params,
    };
  },
};
