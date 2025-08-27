import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/notes/{personAnnotation-id}': Operation<
    '/users/{user-id}/profile/notes/{personAnnotation-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/notes': Operation<'/users/{user-id}/profile/notes', 'get'>;
  'GET /users/{user-id}/profile/notes/{personAnnotation-id}': Operation<
    '/users/{user-id}/profile/notes/{personAnnotation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/notes/{personAnnotation-id}': Operation<
    '/users/{user-id}/profile/notes/{personAnnotation-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/notes': Operation<'/users/{user-id}/profile/notes', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/notes/{personAnnotation-id}`
 *
 * Deletes a personAnnotation object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/notes/{personAnnotation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/notes/{personAnnotation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/notes/{personAnnotation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personAnnotation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/notes`
 *
 * Represents notes that a user has added to their profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/notes']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/notes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/notes',
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
 * `GET /users/{user-id}/profile/notes/{personAnnotation-id}`
 *
 * Represents notes that a user has added to their profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/notes/{personAnnotation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/notes/{personAnnotation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/notes/{personAnnotation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personAnnotation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/notes/{personAnnotation-id}`
 *
 * Update the properties of a personAnnotation object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/notes/{personAnnotation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/notes/{personAnnotation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/notes/{personAnnotation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/notes/{personAnnotation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personAnnotation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/notes`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/notes']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/notes']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/notes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/notes',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
