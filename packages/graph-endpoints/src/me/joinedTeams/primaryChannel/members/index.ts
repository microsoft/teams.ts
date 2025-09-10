import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/members': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/members': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/members/add': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members/add',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/members/remove': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members/remove',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/members']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/members',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/members`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/members',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/add']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/add']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/members/add',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/remove']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/remove']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/members/remove',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};
