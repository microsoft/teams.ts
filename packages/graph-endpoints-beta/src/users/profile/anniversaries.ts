import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/anniversaries': Operation<
    '/users/{user-id}/profile/anniversaries',
    'get'
  >;
  'GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/anniversaries': Operation<
    '/users/{user-id}/profile/anniversaries',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personAnnualEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/anniversaries`
 *
 * Represents the details of meaningful dates associated with a person.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/anniversaries']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/anniversaries']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/anniversaries',
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
 * `GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}`
 *
 * Represents the details of meaningful dates associated with a person.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personAnnualEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personAnnualEvent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/anniversaries`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/anniversaries']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/anniversaries']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/anniversaries']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/anniversaries',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
