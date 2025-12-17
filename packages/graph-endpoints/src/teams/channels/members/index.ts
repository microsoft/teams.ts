import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/members': Operation<
    '/teams/{team-id}/channels/{channel-id}/members',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/members': Operation<
    '/teams/{team-id}/channels/{channel-id}/members',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/members/add': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/add',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/members/remove': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/remove',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * Delete a conversationMember from a channel. This operation is allowed only for channels with a membershipType value of private or shared.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/members`
 *
 * Get a list of members in a channel, including direct members of standard, private, and shared channels. Use the List allMembers API to retrieve both direct and indirect members of a shared channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/members',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * Get a conversationMember from a channel.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}`
 *
 * Update the role of a conversationMember in a channel. This operation is allowed only for channels with a membershipType value of private or shared.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/members`
 *
 * Add a conversationMember to a channel. This operation is allowed only for channels with a membershipType value of private or shared.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/members',
    paramDefs: {
      path: ['team-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/add']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/add']['response']
  > {
    return {
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/members/add',
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
   * `POST /teams/{team-id}/channels/{channel-id}/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/remove']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/remove']['response']
  > {
    return {
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/members/remove',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};
