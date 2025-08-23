export * as assignments from './assignments';
export * as classes from './classes';
export * as rubrics from './rubrics';
export * as schools from './schools';
export * as taughtClasses from './taughtClasses';
export * as user from './user';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}': Operation<
    '/education/users/{educationUser-id}',
    'delete'
  >;
  'GET /education/users': Operation<'/education/users', 'get'>;
  'GET /education/users/{educationUser-id}': Operation<
    '/education/users/{educationUser-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}': Operation<
    '/education/users/{educationUser-id}',
    'patch'
  >;
  'POST /education/users': Operation<'/education/users', 'post'>;
}

/**
 * `DELETE /education/users/{educationUser-id}`
 *
 * Delete a user.
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/users/{educationUser-id}']['response']> {
  return {
    method: 'delete',
    path: '/education/users/{educationUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users`
 *
 * Get a list of the educationUser objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /education/users']['parameters']
): EndpointRequest<IEndpoints['GET /education/users']['response']> {
  return {
    method: 'get',
    path: '/education/users',
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
 * `GET /education/users/{educationUser-id}`
 *
 * Read the properties and relationships of an educationUser object.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}']['response']> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}`
 *
 * Update the properties of an educationUser object.
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/users/{educationUser-id}']['response']> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}',
    paramDefs: [{ name: 'educationUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/users`
 *
 * Create a new educationUser object.
 */
export function create(
  body: IEndpoints['POST /education/users']['body'],
  params?: IEndpoints['POST /education/users']['parameters']
): EndpointRequest<IEndpoints['POST /education/users']['response']> {
  return {
    method: 'post',
    path: '/education/users',
    paramDefs: [],
    params,
    body,
  };
}
