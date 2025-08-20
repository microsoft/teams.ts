export * as childFolders from './childFolders';
export * as copy from './copy';
export * as messageRules from './messageRules';
export * as messages from './messages';
export * as move from './move';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}',
    'delete'
  >;
  'GET /users/{user-id}/mailFolders': Operation<'/users/{user-id}/mailFolders', 'get'>;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}',
    'patch'
  >;
  'POST /users/{user-id}/mailFolders': Operation<'/users/{user-id}/mailFolders', 'post'>;
}

/**
 * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders`
 *
 * The user&#x27;s mail folders. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mailFolders']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders',
    paramDefs: [
      { name: 'includeHiddenFolders', in: 'query' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}`
 *
 * The user&#x27;s mail folders. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}',
    paramDefs: [
      { name: 'includeHiddenFolders', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mailFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/mailFolders']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/mailFolders',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
