import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'get'
  >;
  'GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'post'
  >;
}

/**
 * `DELETE /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
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
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
 *
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
