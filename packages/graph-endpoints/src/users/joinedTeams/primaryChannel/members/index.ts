import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members',
    paramDefs: {
      path: ['user-id', 'team-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/add',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};
