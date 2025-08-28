export * as forwardToChat from './forwardToChat';
export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as replyWithQuote from './replyWithQuote';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/messages': Operation<
    '/teams/{team-id}/primaryChannel/messages',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/messages': Operation<
    '/teams/{team-id}/primaryChannel/messages',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/messages`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/messages']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/messages',
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
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
