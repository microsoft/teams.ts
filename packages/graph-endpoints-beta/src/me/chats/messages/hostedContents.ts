import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
