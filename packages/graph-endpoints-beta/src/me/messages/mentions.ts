import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/messages/{message-id}/mentions/{mention-id}': Operation<
    '/me/messages/{message-id}/mentions/{mention-id}',
    'delete'
  >;
  'GET /me/messages/{message-id}/mentions': Operation<'/me/messages/{message-id}/mentions', 'get'>;
  'GET /me/messages/{message-id}/mentions/{mention-id}': Operation<
    '/me/messages/{message-id}/mentions/{mention-id}',
    'get'
  >;
  'POST /me/messages/{message-id}/mentions': Operation<
    '/me/messages/{message-id}/mentions',
    'post'
  >;
}

/**
 * `DELETE /me/messages/{message-id}/mentions/{mention-id}`
 *
 * Delete a message in the specified user&#x27;s mailbox, or delete a relationship of the message. For example, you can delete a specific @-mention of the specified user in the message.
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}/mentions/{mention-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/messages/{message-id}/mentions/{mention-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/messages/{message-id}/mentions/{mention-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'message-id', in: 'path' },
      { name: 'mention-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/mentions`
 *
 * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
 */
export function list(
  params?: IEndpoints['GET /me/messages/{message-id}/mentions']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/mentions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages/{message-id}/mentions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/mentions/{mention-id}`
 *
 * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
 */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}/mentions/{mention-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/mentions/{mention-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages/{message-id}/mentions/{mention-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
      { name: 'mention-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/messages/{message-id}/mentions`
 *
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/mentions']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/mentions']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/mentions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages/{message-id}/mentions',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
