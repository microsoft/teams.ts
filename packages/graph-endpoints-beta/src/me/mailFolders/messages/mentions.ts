import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}',
    'get'
  >;
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
      { name: 'mention-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions`
 *
 * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions',
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
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}`
 *
 * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
      { name: 'mention-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions`
 *
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
