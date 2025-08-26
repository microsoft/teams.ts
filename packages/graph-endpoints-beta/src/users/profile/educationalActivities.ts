import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/educationalActivities': Operation<
    '/users/{user-id}/profile/educationalActivities',
    'get'
  >;
  'GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/educationalActivities': Operation<
    '/users/{user-id}/profile/educationalActivities',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'educationalActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/educationalActivities`
 *
 * Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/educationalActivities']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/educationalActivities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/educationalActivities',
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
 * `GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}`
 *
 * Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'educationalActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'educationalActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/educationalActivities`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/educationalActivities']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/educationalActivities']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/educationalActivities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/educationalActivities',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
