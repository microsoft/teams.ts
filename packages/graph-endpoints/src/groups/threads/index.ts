export * as posts from './posts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}',
    'delete'
  >;
  'GET /groups/{group-id}/threads': Operation<'/groups/{group-id}/threads', 'get'>;
  'GET /groups/{group-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}',
    'patch'
  >;
  'POST /groups/{group-id}/threads': Operation<'/groups/{group-id}/threads', 'post'>;
  'POST /groups/{group-id}/threads/{conversationThread-id}/reply': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/reply',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/threads/{conversationThread-id}`
 *
 * Delete conversationThread.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/threads/{conversationThread-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'conversationThread-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads`
 *
 * Get all the threads of a group.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/threads']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /groups/{group-id}/threads/{conversationThread-id}`
  *
  * Get a specific thread that belongs to a group. You can specify both the parent conversation and the thread, or, 
you can specify the thread without referencing the parent conversation. 
  */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}',
    paramDefs: {
      path: ['group-id', 'conversationThread-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/threads/{conversationThread-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/threads/{conversationThread-id}',
    paramDefs: {
      path: ['group-id', 'conversationThread-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /groups/{group-id}/threads`
  *
  * Start a new group conversation by first creating a thread. A new conversation, conversation thread, and post are created in the group.
Use reply thread or reply post to further post to that thread. Note: You can also start a new thread in an existing conversation.
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/threads']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/threads',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const reply = {
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/reply`
   *
   * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/reply']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/reply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/reply']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/reply',
      paramDefs: {
        path: ['group-id', 'conversationThread-id'],
      },
      params,
      body,
    };
  },
};
