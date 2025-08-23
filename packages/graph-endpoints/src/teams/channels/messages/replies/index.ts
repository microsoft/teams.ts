export * as hostedContents from './hostedContents';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies`
 *
 * List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, call get channel message.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 * Retrieve a single message or a message reply in a channel or a chat.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies`
 *
 * Create a new reply to a chatMessage in a specified channel.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
