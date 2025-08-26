export * as administrativeUnit from './administrativeUnit';
export * as classes from './classes';
export * as users from './users';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/schools/{educationSchool-id}': Operation<
    '/education/schools/{educationSchool-id}',
    'delete'
  >;
  'GET /education/schools': Operation<'/education/schools', 'get'>;
  'GET /education/schools/{educationSchool-id}': Operation<
    '/education/schools/{educationSchool-id}',
    'get'
  >;
  'PATCH /education/schools/{educationSchool-id}': Operation<
    '/education/schools/{educationSchool-id}',
    'patch'
  >;
  'POST /education/schools': Operation<'/education/schools', 'post'>;
}

/**
 * `DELETE /education/schools/{educationSchool-id}`
 *
 * Delete a school.
 */
export function del(
  params?: IEndpoints['DELETE /education/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/schools/{educationSchool-id}']['response']> {
  return {
    method: 'delete',
    path: '/education/schools/{educationSchool-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/schools`
 *
 * Get a list of the educationSchool objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /education/schools']['parameters']
): EndpointRequest<IEndpoints['GET /education/schools']['response']> {
  return {
    method: 'get',
    path: '/education/schools',
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
 * `GET /education/schools/{educationSchool-id}`
 *
 * Read the properties and relationships of an educationSchool object.
 */
export function get(
  params?: IEndpoints['GET /education/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/schools/{educationSchool-id}']['response']> {
  return {
    method: 'get',
    path: '/education/schools/{educationSchool-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/schools/{educationSchool-id}`
 *
 * Update the properties of an educationSchool object.
 */
export function update(
  body: IEndpoints['PATCH /education/schools/{educationSchool-id}']['body'],
  params?: IEndpoints['PATCH /education/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/schools/{educationSchool-id}']['response']> {
  return {
    method: 'patch',
    path: '/education/schools/{educationSchool-id}',
    paramDefs: [{ name: 'educationSchool-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/schools`
 *
 * Create a new educationSchool object.
 */
export function create(
  body: IEndpoints['POST /education/schools']['body'],
  params?: IEndpoints['POST /education/schools']['parameters']
): EndpointRequest<IEndpoints['POST /education/schools']['response']> {
  return {
    method: 'post',
    path: '/education/schools',
    paramDefs: [],
    params,
    body,
  };
}
