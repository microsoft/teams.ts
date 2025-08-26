export * as extensions from './extensions';
export * as permanentDelete from './permanentDelete';
export * as photo from './photo';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    'delete'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    'get'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    'patch'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    'post'
  >;
}

/**
 * `DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}`
 *
 * The contacts in the folder. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}',
    paramDefs: [
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts`
 *
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts',
    paramDefs: [
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}
