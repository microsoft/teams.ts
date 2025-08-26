import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/languages/{languageProficiency-id}': Operation<
    '/users/{user-id}/profile/languages/{languageProficiency-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/languages': Operation<'/users/{user-id}/profile/languages', 'get'>;
  'GET /users/{user-id}/profile/languages/{languageProficiency-id}': Operation<
    '/users/{user-id}/profile/languages/{languageProficiency-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/languages/{languageProficiency-id}': Operation<
    '/users/{user-id}/profile/languages/{languageProficiency-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/languages': Operation<
    '/users/{user-id}/profile/languages',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/languages/{languageProficiency-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/languages/{languageProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/languages/{languageProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/languages/{languageProficiency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'languageProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/languages`
 *
 * Represents detailed information about languages that a user has added to their profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/languages']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/languages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/languages',
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
 * `GET /users/{user-id}/profile/languages/{languageProficiency-id}`
 *
 * Represents detailed information about languages that a user has added to their profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/languages/{languageProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/languages/{languageProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/languages/{languageProficiency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'languageProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/languages/{languageProficiency-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/languages/{languageProficiency-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/languages/{languageProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/languages/{languageProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/languages/{languageProficiency-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'languageProficiency-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/languages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/languages']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/languages']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/languages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/languages',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
