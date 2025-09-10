import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/members': Operation<
    '/users/{user-id}/chats/{chat-id}/members',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/members': Operation<
    '/users/{user-id}/chats/{chat-id}/members',
    'post'
  >;
  'POST /users/{user-id}/chats/{chat-id}/members/add': Operation<
    '/users/{user-id}/chats/{chat-id}/members/add',
    'post'
  >;
  'POST /users/{user-id}/chats/{chat-id}/members/remove': Operation<
    '/users/{user-id}/chats/{chat-id}/members/remove',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'chat-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/members`
 *
 * A collection of all the members in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/members']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/members',
    paramDefs: {
      path: ['user-id', 'chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
 *
 * A collection of all the members in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/members']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/members',
    paramDefs: {
      path: ['user-id', 'chat-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/add']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/add']['response']> {
    return {
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/members/add',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/remove']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/remove']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/members/remove',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};
