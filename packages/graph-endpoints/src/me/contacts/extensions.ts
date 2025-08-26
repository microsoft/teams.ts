import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contacts/{contact-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/contacts/{contact-id}/extensions': Operation<
    '/me/contacts/{contact-id}/extensions',
    'get'
  >;
  'GET /me/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contacts/{contact-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/contacts/{contact-id}/extensions/{extension-id}': Operation<
    '/me/contacts/{contact-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/contacts/{contact-id}/extensions': Operation<
    '/me/contacts/{contact-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/contacts/{contact-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/contacts/{contact-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/contacts/{contact-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/contacts/{contact-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contact-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contacts/{contact-id}/extensions`
 *
 * The collection of open extensions defined for the contact. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/contacts/{contact-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /me/contacts/{contact-id}/extensions']['response']> {
  return {
    method: 'get',
    path: '/me/contacts/{contact-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/contacts/{contact-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the contact. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/contacts/{contact-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/contacts/{contact-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/contacts/{contact-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contact-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/contacts/{contact-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/contacts/{contact-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/contacts/{contact-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/contacts/{contact-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/contacts/{contact-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'contact-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/contacts/{contact-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/contacts/{contact-id}/extensions']['body'],
  params?: IEndpoints['POST /me/contacts/{contact-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /me/contacts/{contact-id}/extensions']['response']> {
  return {
    method: 'post',
    path: '/me/contacts/{contact-id}/extensions',
    paramDefs: [{ name: 'contact-id', in: 'path' }],
    params,
    body,
  };
}
