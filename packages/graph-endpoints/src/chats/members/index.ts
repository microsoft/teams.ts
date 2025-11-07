import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/chats/{chat-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/members': Operation<'/chats/{chat-id}/members', 'get'>;
  'GET /chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/chats/{chat-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/chats/{chat-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/members': Operation<'/chats/{chat-id}/members', 'post'>;
  'POST /chats/{chat-id}/members/add': Operation<'/chats/{chat-id}/members/add', 'post'>;
  'POST /chats/{chat-id}/members/remove': Operation<'/chats/{chat-id}/members/remove', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}/members/{conversationMember-id}`
 *
 * Remove a conversationMember from a chat.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/members`
 *
 * List all conversation members in a chat or channel.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/members']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/members',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/members/{conversationMember-id}`
 *
 * Retrieve a conversationMember from a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/members/{conversationMember-id}']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['chat-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['chat-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/members`
 *
 * Add a conversationMember to a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/members']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/members']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/members',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /chats/{chat-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/members/add']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/members/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/members/add']['response']> {
    return {
      method: 'post',
      path: '/chats/{chat-id}/members/add',
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
   * `POST /chats/{chat-id}/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/members/remove']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/members/remove']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/members/remove']['response']> {
    return {
      method: 'post',
      path: '/chats/{chat-id}/members/remove',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};
