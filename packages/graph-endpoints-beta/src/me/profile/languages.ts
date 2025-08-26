import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/languages/{languageProficiency-id}': Operation<
    '/me/profile/languages/{languageProficiency-id}',
    'delete'
  >;
  'GET /me/profile/languages': Operation<'/me/profile/languages', 'get'>;
  'GET /me/profile/languages/{languageProficiency-id}': Operation<
    '/me/profile/languages/{languageProficiency-id}',
    'get'
  >;
  'PATCH /me/profile/languages/{languageProficiency-id}': Operation<
    '/me/profile/languages/{languageProficiency-id}',
    'patch'
  >;
  'POST /me/profile/languages': Operation<'/me/profile/languages', 'post'>;
}

/**
 * `DELETE /me/profile/languages/{languageProficiency-id}`
 *
 * Delete a languageProficiency object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/languages/{languageProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/profile/languages/{languageProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/languages/{languageProficiency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'languageProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/languages`
 *
 * Retrieve a list of languageProficiency objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/languages']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/languages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/languages',
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
 * `GET /me/profile/languages/{languageProficiency-id}`
 *
 * Retrieve the properties and relationships of a languageProficiency object within a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/languages/{languageProficiency-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/languages/{languageProficiency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/languages/{languageProficiency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'languageProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/languages/{languageProficiency-id}`
 *
 * Update the properties of a languageProficiency object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/languages/{languageProficiency-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/languages/{languageProficiency-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/languages/{languageProficiency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/languages/{languageProficiency-id}',
    paramDefs: [{ name: 'languageProficiency-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/languages`
 *
 * Use this API to create a new languageProficiency object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/languages']['body'],
  params?: IEndpoints['POST /me/profile/languages']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/languages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/languages',
    paramDefs: [],
    params,
    body,
  };
}
