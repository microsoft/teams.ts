export * as attachments from './attachments';
export * as copy from './copy';
export * as createForward from './createForward';
export * as createReply from './createReply';
export * as createReplyAll from './createReplyAll';
export * as extensions from './extensions';
export * as forward from './forward';
export * as move from './move';
export * as permanentDelete from './permanentDelete';
export * as reply from './reply';
export * as replyAll from './replyAll';
export * as send from './send';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}',
    'delete'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/messages': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}',
    'patch'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/messages': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messages',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/messages`
 *
 * The collection of messages in the mailFolder.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messages']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}`
 *
 * The collection of messages in the mailFolder.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messages']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messages',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
