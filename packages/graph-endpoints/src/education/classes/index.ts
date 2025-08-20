export * as assignmentCategories from './assignmentCategories';
export * as assignmentDefaults from './assignmentDefaults';
export * as assignmentSettings from './assignmentSettings';
export * as assignments from './assignments';
export * as group from './group';
export * as members from './members';
export * as modules from './modules';
export * as schools from './schools';
export * as teachers from './teachers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}': Operation<
    '/education/classes/{educationClass-id}',
    'delete'
  >;
  'GET /education/classes': Operation<'/education/classes', 'get'>;
  'GET /education/classes/{educationClass-id}': Operation<
    '/education/classes/{educationClass-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}': Operation<
    '/education/classes/{educationClass-id}',
    'patch'
  >;
  'POST /education/classes': Operation<'/education/classes', 'post'>;
}

/**
 * `DELETE /education/classes/{educationClass-id}`
 *
 * Delete an educationClass. Because a class is also a universal group, deleting a class deletes the group.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/classes/{educationClass-id}']['response']> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes`
 *
 * Get a list of the educationClass objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /education/classes']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes']['response']> {
  return {
    method: 'get',
    path: '/education/classes',
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
 * `GET /education/classes/{educationClass-id}`
 *
 * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you&#x27;re using the delegated token, the user will only see classes in which they are members.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}']['response']> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}`
 *
 * Update the properties of an educationClass object.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/classes/{educationClass-id}']['response']> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/classes`
 *
 * Create a new educationClass object.
 */
export function create(
  body: IEndpoints['POST /education/classes']['body'],
  params?: IEndpoints['POST /education/classes']['parameters']
): EndpointRequest<IEndpoints['POST /education/classes']['response']> {
  return {
    method: 'post',
    path: '/education/classes',
    paramDefs: [],
    params,
    body,
  };
}
