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

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messages': Operation<
    '/me/mailFolders/{mailFolder-id}/messages',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messages/{message-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}',
    'patch'
  >;
  'POST /me/mailFolders/{mailFolder-id}/messages': Operation<
    '/me/mailFolders/{mailFolder-id}/messages',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messages`
 *
 * List all the messages in the specified user&#x27;s mailbox, or those messages in a specified folder in the mailbox.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messages/{message-id}`
 *
 * The collection of messages in the mailFolder.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messages`
 *
 * Use this API to create a new Message in a mailfolder.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
