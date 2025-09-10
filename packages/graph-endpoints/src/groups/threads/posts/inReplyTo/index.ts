export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
    'get'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
    'post'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    'delete'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward',
    'post'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply',
    'post'
  >;
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo`
 *
 * Read-only. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo',
    paramDefs: {
      path: ['group-id', 'conversationThread-id', 'post-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const extensions = {
  /**
   * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions`
   *
   * The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'conversationThread-id', 'post-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'conversationThread-id', 'post-id', 'extension-id'],
      },
      params,
    };
  },
};

export const forward = {
  /**
  * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward`
  *
  * Forward a post to a recipient. You can specify both the parent conversation and thread in the request, 
or, you can specify just the parent thread without the parent conversation. 
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/forward',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
};

export const reply = {
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
};
