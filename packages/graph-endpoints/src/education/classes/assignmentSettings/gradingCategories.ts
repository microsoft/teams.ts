import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationGradingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories`
 *
 * When set, enables users to weight assignments differently when computing a class average grade.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
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
 * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}`
 *
 * When set, enables users to weight assignments differently when computing a class average grade.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationGradingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}`
 *
 * Update a single gradingCategory on the educationAssignmentSettings. Only teachers can perform this operation.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories/{educationGradingCategory-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationGradingCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories`
 *
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingCategories']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingCategories',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
