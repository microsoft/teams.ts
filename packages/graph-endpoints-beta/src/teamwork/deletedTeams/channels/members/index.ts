import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedTeam-id', 'channel-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/add',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/remove',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};
