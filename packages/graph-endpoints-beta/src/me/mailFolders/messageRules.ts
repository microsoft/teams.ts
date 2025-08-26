import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'delete'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'patch'
  >;
  'POST /me/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/me/mailFolders/{mailFolder-id}/messageRules',
    'post'
  >;
}

/**
 * `DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/messageRules`
 *
 * The collection of rules that apply to the user&#x27;s Inbox folder.
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messageRules',
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
 * `GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 * The collection of rules that apply to the user&#x27;s Inbox folder.
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['body'],
  params?: IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/messageRules`
 *
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/messageRules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messageRules',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
