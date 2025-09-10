import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/allMembers': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/allMembers': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/add',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/remove',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/add',
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
   * `POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/remove',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};
