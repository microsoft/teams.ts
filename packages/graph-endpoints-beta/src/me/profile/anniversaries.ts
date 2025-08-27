import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/me/profile/anniversaries/{personAnnualEvent-id}',
    'delete'
  >;
  'GET /me/profile/anniversaries': Operation<'/me/profile/anniversaries', 'get'>;
  'GET /me/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/me/profile/anniversaries/{personAnnualEvent-id}',
    'get'
  >;
  'PATCH /me/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/me/profile/anniversaries/{personAnnualEvent-id}',
    'patch'
  >;
  'POST /me/profile/anniversaries': Operation<'/me/profile/anniversaries', 'post'>;
}

/**
 * `DELETE /me/profile/anniversaries/{personAnnualEvent-id}`
 *
 * Delete a personAnniversary object from the user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/anniversaries/{personAnnualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/profile/anniversaries/{personAnnualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/anniversaries/{personAnnualEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personAnnualEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/anniversaries`
 *
 * Retrieve a list of personAnniversary objects for the given user from their profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/anniversaries']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/anniversaries']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/anniversaries',
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
 * `GET /me/profile/anniversaries/{personAnnualEvent-id}`
 *
 * Retrieve the properties and relationships of a personAnniversary object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/anniversaries/{personAnnualEvent-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/anniversaries/{personAnnualEvent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/anniversaries/{personAnnualEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personAnnualEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/anniversaries/{personAnnualEvent-id}`
 *
 * Update the properties of a personAnniversary object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/anniversaries/{personAnnualEvent-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/anniversaries/{personAnnualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/profile/anniversaries/{personAnnualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/anniversaries/{personAnnualEvent-id}',
    paramDefs: [{ name: 'personAnnualEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/anniversaries`
 *
 * Use this API to create a new personAnniversary object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/anniversaries']['body'],
  params?: IEndpoints['POST /me/profile/anniversaries']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/anniversaries']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/anniversaries',
    paramDefs: [],
    params,
    body,
  };
}
