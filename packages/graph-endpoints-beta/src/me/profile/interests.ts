import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/interests/{personInterest-id}': Operation<
    '/me/profile/interests/{personInterest-id}',
    'delete'
  >;
  'GET /me/profile/interests': Operation<'/me/profile/interests', 'get'>;
  'GET /me/profile/interests/{personInterest-id}': Operation<
    '/me/profile/interests/{personInterest-id}',
    'get'
  >;
  'PATCH /me/profile/interests/{personInterest-id}': Operation<
    '/me/profile/interests/{personInterest-id}',
    'patch'
  >;
  'POST /me/profile/interests': Operation<'/me/profile/interests', 'post'>;
}

/**
 * `DELETE /me/profile/interests/{personInterest-id}`
 *
 * Deletes a personInterest object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/interests/{personInterest-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/interests/{personInterest-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/interests/{personInterest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personInterest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/interests`
 *
 * Retrieve a list of personInterest objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/interests']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/interests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/interests',
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
 * `GET /me/profile/interests/{personInterest-id}`
 *
 * Retrieve the properties and relationships of a personInterest object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/interests/{personInterest-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/interests/{personInterest-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/interests/{personInterest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personInterest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/interests/{personInterest-id}`
 *
 * Update the properties of a personInterest object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/interests/{personInterest-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/interests/{personInterest-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/interests/{personInterest-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/interests/{personInterest-id}',
    paramDefs: [{ name: 'personInterest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/interests`
 *
 * Create a new personInterest.
 */
export function create(
  body: IEndpoints['POST /me/profile/interests']['body'],
  params?: IEndpoints['POST /me/profile/interests']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/interests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/interests',
    paramDefs: [],
    params,
    body,
  };
}
