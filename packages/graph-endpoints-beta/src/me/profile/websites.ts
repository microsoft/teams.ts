import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/websites/{personWebsite-id}': Operation<
    '/me/profile/websites/{personWebsite-id}',
    'delete'
  >;
  'GET /me/profile/websites': Operation<'/me/profile/websites', 'get'>;
  'GET /me/profile/websites/{personWebsite-id}': Operation<
    '/me/profile/websites/{personWebsite-id}',
    'get'
  >;
  'PATCH /me/profile/websites/{personWebsite-id}': Operation<
    '/me/profile/websites/{personWebsite-id}',
    'patch'
  >;
  'POST /me/profile/websites': Operation<'/me/profile/websites', 'post'>;
}

/**
 * `DELETE /me/profile/websites/{personWebsite-id}`
 *
 * Deletes a personWebsite object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/websites/{personWebsite-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/websites/{personWebsite-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/websites/{personWebsite-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personWebsite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/websites`
 *
 * Retrieve a list of personWebsite objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/websites']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/websites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/websites',
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
 * `GET /me/profile/websites/{personWebsite-id}`
 *
 * Retrieve the properties and relationships of a personWebsite object from a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/websites/{personWebsite-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/websites/{personWebsite-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/websites/{personWebsite-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personWebsite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/websites/{personWebsite-id}`
 *
 * Update the properties of personWebsite object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/websites/{personWebsite-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/websites/{personWebsite-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/websites/{personWebsite-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/websites/{personWebsite-id}',
    paramDefs: [{ name: 'personWebsite-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/websites`
 *
 * Create a new personWebsite object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/websites']['body'],
  params?: IEndpoints['POST /me/profile/websites']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/websites']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/websites',
    paramDefs: [],
    params,
    body,
  };
}
