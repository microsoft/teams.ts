import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/awards/{personAward-id}': Operation<
    '/me/profile/awards/{personAward-id}',
    'delete'
  >;
  'GET /me/profile/awards': Operation<'/me/profile/awards', 'get'>;
  'GET /me/profile/awards/{personAward-id}': Operation<
    '/me/profile/awards/{personAward-id}',
    'get'
  >;
  'PATCH /me/profile/awards/{personAward-id}': Operation<
    '/me/profile/awards/{personAward-id}',
    'patch'
  >;
  'POST /me/profile/awards': Operation<'/me/profile/awards', 'post'>;
}

/**
 * `DELETE /me/profile/awards/{personAward-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/awards/{personAward-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/awards/{personAward-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/awards/{personAward-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personAward-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/awards`
 *
 * Retrieve a list of personAward objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/awards']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/awards']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/awards',
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
 * `GET /me/profile/awards/{personAward-id}`
 *
 * Read the properties and relationships of a personAward object from a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/awards/{personAward-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/awards/{personAward-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/awards/{personAward-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personAward-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/awards/{personAward-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/awards/{personAward-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/awards/{personAward-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/awards/{personAward-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/awards/{personAward-id}',
    paramDefs: [{ name: 'personAward-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/awards`
 *
 * Create a new personAward object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/awards']['body'],
  params?: IEndpoints['POST /me/profile/awards']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/awards']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/awards',
    paramDefs: [],
    params,
    body,
  };
}
