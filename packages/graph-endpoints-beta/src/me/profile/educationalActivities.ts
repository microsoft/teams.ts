import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/me/profile/educationalActivities/{educationalActivity-id}',
    'delete'
  >;
  'GET /me/profile/educationalActivities': Operation<'/me/profile/educationalActivities', 'get'>;
  'GET /me/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/me/profile/educationalActivities/{educationalActivity-id}',
    'get'
  >;
  'PATCH /me/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/me/profile/educationalActivities/{educationalActivity-id}',
    'patch'
  >;
  'POST /me/profile/educationalActivities': Operation<'/me/profile/educationalActivities', 'post'>;
}

/**
 * `DELETE /me/profile/educationalActivities/{educationalActivity-id}`
 *
 * Delete an educationalActivity object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/educationalActivities/{educationalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/profile/educationalActivities/{educationalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/educationalActivities/{educationalActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationalActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/educationalActivities`
 *
 * Retrieve a list of educationalActivity objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/educationalActivities']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/educationalActivities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/educationalActivities',
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
 * `GET /me/profile/educationalActivities/{educationalActivity-id}`
 *
 * Retrieve the properties and relationships of an educationalActivity object from a users profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/educationalActivities/{educationalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/profile/educationalActivities/{educationalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/educationalActivities/{educationalActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationalActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/educationalActivities/{educationalActivity-id}`
 *
 * Update the properties of an educationalActivity object within a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/educationalActivities/{educationalActivity-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/educationalActivities/{educationalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/profile/educationalActivities/{educationalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/educationalActivities/{educationalActivity-id}',
    paramDefs: [{ name: 'educationalActivity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/educationalActivities`
 *
 * Create a new educationalActivity in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/educationalActivities']['body'],
  params?: IEndpoints['POST /me/profile/educationalActivities']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/educationalActivities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/educationalActivities',
    paramDefs: [],
    params,
    body,
  };
}
