import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/allMembers': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/allMembers': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/allMembers/add': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers/add',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/allMembers/remove': Operation<
    '/teams/{team-id}/channels/{channel-id}/allMembers/remove',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/allMembers`
 *
 * Get a list of all members in a channel. This API supports all channel types, including shared channels. For shared channels, the response includes:
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/allMembers',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/allMembers',
    paramDefs: {
      path: ['team-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/allMembers/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers/add']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers/add']['response']
  > {
    return {
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/allMembers/add',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/allMembers/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers/remove']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers/remove']['response']
  > {
    return {
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/allMembers/remove',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};
