export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/messages': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/messages': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/messages`
 *
 * A collection of all the messages in the channel. A navigation property. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/messages']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. A navigation property. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
