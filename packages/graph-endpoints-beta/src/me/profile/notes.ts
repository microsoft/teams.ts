import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/notes/{personAnnotation-id}': Operation<
    '/me/profile/notes/{personAnnotation-id}',
    'delete'
  >;
  'GET /me/profile/notes': Operation<'/me/profile/notes', 'get'>;
  'GET /me/profile/notes/{personAnnotation-id}': Operation<
    '/me/profile/notes/{personAnnotation-id}',
    'get'
  >;
  'PATCH /me/profile/notes/{personAnnotation-id}': Operation<
    '/me/profile/notes/{personAnnotation-id}',
    'patch'
  >;
  'POST /me/profile/notes': Operation<'/me/profile/notes', 'post'>;
}

/**
 * `DELETE /me/profile/notes/{personAnnotation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/notes/{personAnnotation-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/notes/{personAnnotation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/notes/{personAnnotation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personAnnotation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/notes`
 *
 * Retrieve a list of personAnnotation objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/notes']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/notes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/notes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/notes/{personAnnotation-id}`
 *
 * Read the properties and relationships of a personAnnotation object from a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/notes/{personAnnotation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/notes/{personAnnotation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/notes/{personAnnotation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personAnnotation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/notes/{personAnnotation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/notes/{personAnnotation-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/notes/{personAnnotation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/notes/{personAnnotation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/notes/{personAnnotation-id}',
    paramDefs: [{ name: 'personAnnotation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/notes`
 *
 * Create a new personAnnotation object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/notes']['body'],
  params?: IEndpoints['POST /me/profile/notes']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/notes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/notes',
    paramDefs: [],
    params,
    body,
  };
}
