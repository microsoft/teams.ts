export * as attachments from './attachments';
export * as inReplyTo from './inReplyTo';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}',
    'patch'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
    'get'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
    'post'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward',
    'post'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
    'get'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
    'post'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
    'get'
  >;
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
    'delete'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply',
    'post'
  >;
}

/**
  * `GET /groups/{group-id}/threads/{conversationThread-id}/posts`
  *
  * Get the posts of the specified thread. You can specify both the parent conversation and the thread, or,
you can specify the thread without referencing the parent conversation.
  */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts',
    paramDefs: {
      path: ['group-id', 'conversationThread-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}`
  *
  * Get the properties and relationships of a post in a specified thread. You can specify both the parent
conversation and the thread, or, you can specify the thread without referencing the parent conversation. Since the post resource supports extensions, you can also use the GET operation to get custom properties and extension data in a post instance.
  */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}',
    paramDefs: {
      path: ['group-id', 'conversationThread-id', 'post-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}',
    paramDefs: {
      path: ['group-id', 'conversationThread-id', 'post-id'],
    },
    params,
    body,
  };
}

export const extensions = {
  /**
   * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions`
   *
   * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}`
   *
   * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'conversationThread-id', 'post-id', 'extension-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}`
  *
  * Update an open extension (openTypeExtension object) on a supported resource type.
- If a property in the request body matches the name of an existing property in the extension, the data in the extension is updated.
- Otherwise, that property and its data are added to the extension.  The data in an extension can be primitive types or arrays of primitive types. The operation behaves differently for resources that are directory objects vs other resources. For the list of resources that support open extensions, see the table in the Permissions section.
  */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
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
  * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward`
  *
  * Forward a post to a recipient. You can specify both the parent conversation and thread in the request, 
or, you can specify just the parent thread without the parent conversation. 
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
};

export const mentions = {
  /**
   * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'conversationThread-id', 'post-id', 'mention-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'conversationThread-id', 'post-id', 'mention-id'],
      },
      params,
    };
  },
};

export const reply = {
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
};
