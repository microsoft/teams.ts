import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id', 'channel-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers',
    paramDefs: {
      path: ['user-id', 'team-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'channel-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'channel-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers',
    paramDefs: {
      path: ['user-id', 'team-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add',
      paramDefs: {
        path: ['user-id', 'team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/remove',
      paramDefs: {
        path: ['user-id', 'team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};
