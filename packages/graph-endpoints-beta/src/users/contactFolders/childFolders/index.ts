export * as contacts from './contacts';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'delete'
  >;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    'get'
  >;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    'patch'
  >;
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders`
 *
 * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
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
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 * The collection of child folders in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
