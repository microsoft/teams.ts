export * as attachments from './attachments';
export * as copy from './copy';
export * as createForward from './createForward';
export * as createReply from './createReply';
export * as createReplyAll from './createReplyAll';
export * as extensions from './extensions';
export * as forward from './forward';
export * as markAsJunk from './markAsJunk';
export * as markAsNotJunk from './markAsNotJunk';
export * as mentions from './mentions';
export * as move from './move';
export * as permanentDelete from './permanentDelete';
export * as reply from './reply';
export * as replyAll from './replyAll';
export * as reportMessage from './reportMessage';
export * as send from './send';
export * as unsubscribe from './unsubscribe';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/messages/{message-id}': Operation<
    '/users/{user-id}/messages/{message-id}',
    'delete'
  >;
  'GET /users/{user-id}/messages': Operation<'/users/{user-id}/messages', 'get'>;
  'GET /users/{user-id}/messages/{message-id}': Operation<
    '/users/{user-id}/messages/{message-id}',
    'get'
  >;
  'PATCH /users/{user-id}/messages/{message-id}': Operation<
    '/users/{user-id}/messages/{message-id}',
    'patch'
  >;
  'POST /users/{user-id}/messages': Operation<'/users/{user-id}/messages', 'post'>;
}

/**
 * `DELETE /users/{user-id}/messages/{message-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/messages/{message-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/messages`
 *
 * The messages in a mailbox or folder. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/messages',
    paramDefs: [
      { name: 'includeHiddenMessages', in: 'query' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/messages/{message-id}`
 *
 * The messages in a mailbox or folder. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/messages/{message-id}',
    paramDefs: [
      { name: 'includeHiddenMessages', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/messages/{message-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/messages/{message-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/messages',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
