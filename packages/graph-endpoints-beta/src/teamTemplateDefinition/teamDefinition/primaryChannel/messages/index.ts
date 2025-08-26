export * as forwardToChat from './forwardToChat';
export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as replyWithQuote from './replyWithQuote';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
