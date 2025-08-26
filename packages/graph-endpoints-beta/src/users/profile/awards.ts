import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/awards/{personAward-id}': Operation<
    '/users/{user-id}/profile/awards/{personAward-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/awards': Operation<'/users/{user-id}/profile/awards', 'get'>;
  'GET /users/{user-id}/profile/awards/{personAward-id}': Operation<
    '/users/{user-id}/profile/awards/{personAward-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/awards/{personAward-id}': Operation<
    '/users/{user-id}/profile/awards/{personAward-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/awards': Operation<'/users/{user-id}/profile/awards', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/awards/{personAward-id}`
 *
 * Delete a personAward object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/awards/{personAward-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/awards/{personAward-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/awards/{personAward-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personAward-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/awards`
 *
 * Represents the details of awards or honors associated with a person.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/awards']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/awards']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/awards',
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
 * `GET /users/{user-id}/profile/awards/{personAward-id}`
 *
 * Represents the details of awards or honors associated with a person.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/awards/{personAward-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/awards/{personAward-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/awards/{personAward-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personAward-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/awards/{personAward-id}`
 *
 * Update the properties of a personAward object from a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/awards/{personAward-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/awards/{personAward-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/awards/{personAward-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/awards/{personAward-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personAward-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/awards`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/awards']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/awards']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/awards']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/awards',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
