import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/me/chats/{chat-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/members': Operation<'/me/chats/{chat-id}/members', 'get'>;
  'GET /me/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/me/chats/{chat-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/me/chats/{chat-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/members': Operation<'/me/chats/{chat-id}/members', 'post'>;
  'POST /me/chats/{chat-id}/members/add': Operation<'/me/chats/{chat-id}/members/add', 'post'>;
  'POST /me/chats/{chat-id}/members/remove': Operation<
    '/me/chats/{chat-id}/members/remove',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/members`
 *
 * List all conversation members in a chat. This method supports federation. For one-on-one chats, at least one chat member must belong to the tenant the request initiates from. For group chats, the chat must be initiated by a user in the tenant the request initiates from.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/members']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/members',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/members/{conversationMember-id}`
 *
 * A collection of all the members in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['chat-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['chat-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/members']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/members']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/members',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /me/chats/{chat-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/members/add']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/members/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/members/add']['response']> {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/members/add',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /me/chats/{chat-id}/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/members/remove']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/members/remove']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/members/remove']['response']> {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/members/remove',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};
