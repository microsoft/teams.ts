export * as copy from './copy';
export * as messageRules from './messageRules';
export * as messages from './messages';
export * as move from './move';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'delete'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    'patch'
  >;
  'POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders`
 *
 * The collection of child folders in the mailFolder.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
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
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 * The collection of child folders in the mailFolder.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: [
      { name: 'includeHiddenFolders', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
