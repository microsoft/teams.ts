import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'delete'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    'patch'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules`
 *
 * The collection of rules that apply to the user&#x27;s Inbox folder.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
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
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 * The collection of rules that apply to the user&#x27;s Inbox folder.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'messageRule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/messageRules',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
