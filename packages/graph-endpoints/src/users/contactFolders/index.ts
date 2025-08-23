export * as childFolders from './childFolders';
export * as contacts from './contacts';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contactFolders/{contactFolder-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}',
    'delete'
  >;
  'GET /users/{user-id}/contactFolders': Operation<'/users/{user-id}/contactFolders', 'get'>;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}',
    'get'
  >;
  'PATCH /users/{user-id}/contactFolders/{contactFolder-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}',
    'patch'
  >;
  'POST /users/{user-id}/contactFolders': Operation<'/users/{user-id}/contactFolders', 'post'>;
}

/**
 * `DELETE /users/{user-id}/contactFolders/{contactFolder-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders`
 *
 * The user&#x27;s contacts folders. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contactFolders']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/contactFolders']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/contactFolders',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}`
 *
 * The user&#x27;s contacts folders. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contactFolders/{contactFolder-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contactFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/contactFolders']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/contactFolders',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
