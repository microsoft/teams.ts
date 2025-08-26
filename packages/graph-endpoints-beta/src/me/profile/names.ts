import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/names/{personName-id}': Operation<
    '/me/profile/names/{personName-id}',
    'delete'
  >;
  'GET /me/profile/names': Operation<'/me/profile/names', 'get'>;
  'GET /me/profile/names/{personName-id}': Operation<'/me/profile/names/{personName-id}', 'get'>;
  'PATCH /me/profile/names/{personName-id}': Operation<
    '/me/profile/names/{personName-id}',
    'patch'
  >;
  'POST /me/profile/names': Operation<'/me/profile/names', 'post'>;
}

/**
 * `DELETE /me/profile/names/{personName-id}`
 *
 * Delete a personName object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/names/{personName-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/names/{personName-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/names/{personName-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personName-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/names`
 *
 * Retrieve a list of personName objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/names']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/names']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/names',
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
 * `GET /me/profile/names/{personName-id}`
 *
 * Retrieve the properties and relationships of a personName object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/names/{personName-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/names/{personName-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/names/{personName-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personName-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/names/{personName-id}`
 *
 * Update the properties of a personName object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/names/{personName-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/names/{personName-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/names/{personName-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/names/{personName-id}',
    paramDefs: [{ name: 'personName-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/names`
 *
 * Use this API to create a new personName object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/names']['body'],
  params?: IEndpoints['POST /me/profile/names']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/names']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/names',
    paramDefs: [],
    params,
    body,
  };
}
