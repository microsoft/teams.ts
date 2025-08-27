import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions`
 *
 * The collection of open extensions defined for the message. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions',
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
 * `GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the message. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
