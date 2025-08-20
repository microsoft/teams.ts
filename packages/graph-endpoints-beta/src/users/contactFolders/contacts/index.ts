export * as extensions from './extensions';
export * as permanentDelete from './permanentDelete';
export * as photo from './photo';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    'delete'
  >;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts',
    'get'
  >;
  'GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    'get'
  >;
  'PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    'patch'
  >;
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/contacts',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts',
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
 * `GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/contacts',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
