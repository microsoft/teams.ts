import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
    'get'
  >;
  'GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions': Operation<
    '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions`
 *
 * The collection of open extensions defined for the contact. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
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
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the contact. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['body'],
  params?: IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions',
    paramDefs: [
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
    body,
  };
}
