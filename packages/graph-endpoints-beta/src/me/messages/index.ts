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
  'DELETE /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'delete'>;
  'GET /me/messages': Operation<'/me/messages', 'get'>;
  'GET /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'get'>;
  'PATCH /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'patch'>;
  'POST /me/messages': Operation<'/me/messages', 'post'>;
}

/**
 * `DELETE /me/messages/{message-id}`
 *
 * Delete eventMessage.
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/messages/{message-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function list(
  params?: IEndpoints['GET /me/messages']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages',
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
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages/{message-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/messages/{message-id}`
 *
 * Update the properties of a message object.
 */
export function update(
  body: IEndpoints['PATCH /me/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/messages/{message-id}',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/messages`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /me/messages']['body'],
  params?: IEndpoints['POST /me/messages']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages',
    paramDefs: [],
    params,
    body,
  };
}
