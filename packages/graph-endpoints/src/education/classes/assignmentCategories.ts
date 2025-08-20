import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignmentCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentCategories',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}`
 *
 * Delete an existing category. Only teachers can perform this operation.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentCategories`
 *
 * Retrieve a list of educationCategory objects. Only teachers can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentCategories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}`
 *
 * Retrieve an educationCategory object. Only teachers, students, and applications with application permissions can perform this operation.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentCategories/{educationCategory-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignmentCategories`
 *
 * Create a new educationCategory on an educationClass. Only teachers can perform this operation.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignmentCategories']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignmentCategories']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignmentCategories']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignmentCategories',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
