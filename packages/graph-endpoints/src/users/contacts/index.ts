export * as extensions from './extensions';
export * as permanentDelete from './permanentDelete';
export * as photo from './photo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}',
    'delete'
  >;
  'GET /users/{user-id}/contacts': Operation<'/users/{user-id}/contacts', 'get'>;
  'GET /users/{user-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}',
    'get'
  >;
  'PATCH /users/{user-id}/contacts/{contact-id}': Operation<
    '/users/{user-id}/contacts/{contact-id}',
    'patch'
  >;
  'POST /users/{user-id}/contacts': Operation<'/users/{user-id}/contacts', 'post'>;
}

/**
 * `DELETE /users/{user-id}/contacts/{contact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/contacts/{contact-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/contacts/{contact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/contacts`
 *
 * The user&#x27;s contacts. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/contacts']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/contacts']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/contacts',
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
 * `GET /users/{user-id}/contacts/{contact-id}`
 *
 * The user&#x27;s contacts. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/contacts/{contact-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/contacts/{contact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/contacts/{contact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/contacts/{contact-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/contacts/{contact-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contact-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/contacts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contacts']['body'],
  params?: IEndpoints['POST /users/{user-id}/contacts']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/contacts']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/contacts',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
