export * as activate from './activate';
export * as categories from './categories';
export * as deactivate from './deactivate';
export * as gradingCategory from './gradingCategory';
export * as gradingScheme from './gradingScheme';
export * as publish from './publish';
export * as resources from './resources';
export * as rubric from './rubric';
export * as setUpFeedbackResourcesFolder from './setUpFeedbackResourcesFolder';
export * as setUpResourcesFolder from './setUpResourcesFolder';
export * as submissions from './submissions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignments': Operation<
    '/education/classes/{educationClass-id}/assignments',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignments': Operation<
    '/education/classes/{educationClass-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}`
 *
 * Delete an existing assignment. Only teachers within a class can delete assignments.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments`
 *
 * Retrieve a list of educationAssignment objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application executing with application permissions can see all assignment objects for the class. Students can only see assignments that are assigned to them.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments',
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
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}`
 *
 * Get the properties and relationships of an assignment. Only teachers, students, and applications with application permissions can perform this operation. Students can only see assignments assigned to them; teachers and applications with application permissions can see all assignments in a class. You can use the Prefer header in your request to get the inactive status in case the assignment is deactivated; otherwise, the response value for the status property is unknownFutureValue.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}`
 *
 * Update an educationAssignment object.  Only teachers in the class can do this. You can&#x27;t use a PATCH request to change the status of an assignment. Use the publish action to change the assignment status.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments`
 *
 * Create a new assignment. Only teachers in a class can create an assignment. Assignments start in draft status, which means that students can&#x27;t see the assignment until it&#x27;s published.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
