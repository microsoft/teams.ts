import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
    'post'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories`
 *
 * List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
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
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories`
 *
 * Add one or more existing educationCategory objects to the specified  educationAssignment. Only teachers can perform this operation.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
